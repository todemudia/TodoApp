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
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
});



router.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    User.findOne({ email }, async (err, doc) => {
        if (err) throw err;
        if (doc) res.send("Email is Already in use");
        if (!doc) {
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
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

module.exports = router;
