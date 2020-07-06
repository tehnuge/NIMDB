require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { importSchema } = require('graphql-import');
const { resolvers } = require('./graphql');
const typeDefs = importSchema('./src/graphql/schema.graphql');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require("passport");
const session = require("express-session");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');


const { findOrAddUser } = require('./graphql/Mutation');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
server.applyMiddleware({ app });
// initalize passport
app.use(
  session({
    store: new (require('connect-pg-simple')(session))(),
    secret: process.env.COOKIE_KEY,
    name: 'serverapp',
    saveUninitialized: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('public'));

// set up cors to allow us to accept requests from our client
app.use(
  cors({
    origin: process.env.WEB_URL, // allow server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true // allow session cookie from browser to pass through
  })
);

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: `/auth/google/redirect`
},
  (accessToken, refreshToken, profile, done) => {
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

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get('/auth/google',
  passport.authenticate('google', {
    scope: ['profile']
  })
);

app.get('/auth/google/redirect',
  passport.authenticate('google', { successRedirect: process.env.WEB_URL, failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.get('/user', (req, res) => {
  if (req.session.passport) {
    findOrAddUser(null, { googleId: req.session.passport.user.profile.id })
      .then((user) => {
        res.send({
          googleId: req.session.passport.user.profile.id,
          name: user.name,
          id: user.id
        });
        // return done(null, {
        //   profile,
        //   token: accessToken
        // });
      })
  }
  else {
    res.send('not logged in');
  }
});
app.use((req, res, next) => {
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('/');
    return;
  }
});

if (process.env.NODE_ENV === 'production') {	
  console.log("PRODODOFODOFDOFOFODFO")
  // Serve any static files	
  app.use(express.static(path.join(__dirname, '../../client/build')));	
  // Handle React routing, return all requests to React app	
  app.get('*', function(req, res) {	
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));	
  });	
}

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
