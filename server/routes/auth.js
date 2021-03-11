const express = require('express');
const router = express.Router();
const User = require('../model/user');
const bcrypt = require("bcryptjs");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
require("../passportConfig")(passport);

router.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send({ message: 'No user exists' } );
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send({ message: 'Successfully  Authenticated' } );
        });
      }
    })(req, res, next);
});

router.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    User.findOne({ email }, async (err, user) => {
        if (err) throw err;
        if (user) res.send({ message: 'Email is already in use' } );
        if (!user) {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
        }
    });
});

router.get("/user", (req, res) => {
    res.send(req.user); 
});

router.get("/logout", (req, res) => {
  try {
    req.logout();
    res.send( { message: 'Successfully logged out' });
  } catch (error) {
    console.log(error)
  }
});

module.exports = router;
