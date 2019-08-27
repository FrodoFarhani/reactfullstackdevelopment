const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

/**
 * we create cookie with user.id, we use mongoDb user Id, because
 * maybe we want to have othe auth method like
 * facebook or ... so we use the collection id
 * of user that every one have
 */
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});
//console.developers.google.com -> google+API
passport.use(
  new googleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      /**
       * proxy true is tell google to handle if there is an proxy on prod server
       * to handle http and https
       */
      proxy: true
    },
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(result => {
        if (result) {
          // user already exists
          //we should say passport that we are done!
          //done(error,the User)
          done(null, result);
        } else {
          new User({
            googleId: profile.id
          })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
