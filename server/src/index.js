require('dotenv').config()
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const { resolvers } = require('./graphql')
const typeDefs = importSchema('./src/graphql/schema.graphql')
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require("passport");
const WEB_URL = "http://localhost:3000/";
const session = require("express-session");
const bodyParser = require("body-parser");

const { findOrAddUser } = require('./graphql/Mutation')

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
// initalize passport
app.use(session({ secret: process.env.COOKIE_KEY }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `/auth/google/redirect`
  },
  function(accessToken, refreshToken, profile, done) {
    // for photoUrl: profile.photos[0].value

    return findOrAddUser(null, { googleId: profile.id, name: profile.name.givenName })
      .then((user) => {
        return done(null, {
          profile,
          token: accessToken
        })
      })
  }
));
app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

app.use('/', express.static('public'));

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

app.get('/auth/google/redirect',
  passport.authenticate('google', { successRedirect: WEB_URL, failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/')
  }
);

app.get('/loggedin', (req, res)=> {
  console.log('passport', req.session.passport)
  if(req.session.passport.user.token){
    res.send('logged in');
  }
  else{
    res.send('not logged in');
  }
});

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port}!`))
