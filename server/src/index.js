require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const { resolvers } = require('./graphql')
const typeDefs = importSchema('./src/graphql/schema.graphql')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require("passport");
const { findOrAddUser } = require('./graphql/Mutation')

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
// initalize passport
app.use(passport.initialize());

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/auth/google/redirect"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log('i see changes')

    for (let key in profile) {
      console.log(key, profile[key])
    }
    findOrAddUser(null, { googleId: profile.id, name: profile.name.givenName }, function (err, user) {
      return cb(err, user);
    });
  }
));

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

app.use('/', express.static('public'));

app.get('/auth/google/redirect',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  }
);

const port = process.env.SERVER_PORT || 4000
app.listen(port, () => console.log(`App listening on port ${port}!`))
