/*************** Declare Dependancies *****************/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require('cors');
const passport = require("passport");
var authRoute = require('./routes/auth');


require('dotenv').config()

/*******************  Setup *********************/
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // <-- location of the react app were connecting to
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

var port = process.env.PORT || 5001;

mongoose.connect(process.env.DB_HOST, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Database is connected!');
});


/******************** Todo Routes **********************/
app.use('/', authRoute);

app.listen(port, function () { 
    console.log(`Server is running on port ${port} now`);
});