/*************** Declare Dependancies *****************/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require('cors');
const passport = require("passport");
const authRoute = require('./routes/auth');
const todoRoute = require('./routes/todo');

require('dotenv').config()

/*******************  Setup *********************/
const app = express();

var port = process.env.PORT || 5002;

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected!');
});

app.use(
  cors({
    origin: "http://localhost:4001", // <-- location of the react app were connecting to
    credentials: true,
  })
);

app.use(cookieParser("secretcode"));
app.use(
session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());


/******************** Todo Routes **********************/
app.use('/auth', authRoute);
app.use('/todo', todoRoute);

app.listen(port, function () { 
    console.log(`Server is running on port ${port} now`);
});