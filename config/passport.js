const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    (email, password, done) => {
      db.User.findOne({
        where: {
          email: email,
        },
      }).then((dbUser) => {
        if (!dbUser) {
          return done(null, false, {
            message: "Email is incorrect",
          });
        } else if (!dbUser.validPassword(password)) {
          return done(null, false, {
            message: "Password is incorrect",
          });
        }

        return done(null, dbUser);
      });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;
