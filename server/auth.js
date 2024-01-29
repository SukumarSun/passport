const passport=require("passport")
const GoogleStrategy = require('passport-google-oauth2' ).Strategy;

const GOOGLE_CLIENT_ID='730528705632-u3v87o9gj9mrhpiu9ir74588i7kqlp8f.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET='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'

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/google/callback",
    passReqToCallback : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });