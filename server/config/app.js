// Name: Hil Patel
// id: 301215094
// fileName: app.js
// Date: October 26, 2022

createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// modules for authentication
let session = require('express-session');
let passport = require('passport');
let passportLocal = require('passport-local');
let localStraretegy = passportLocal.Strategy;
let flash = require('connect-flash')



// monogDB
let mongoose = require('mongoose');
let DB = require('./db');

mongoose.connect(DB.URI);

let mongoDB = mongoose.connection;
mongoDB.on('error',console.log.bind(console,"Connection error!!!"));

mongoDB.once('open',()=>{
console.log("mongoDB Conneted Sucessfully.")
})  

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var contactRouter = require('../routes/list.js');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));


// setup express session

app.use(session({
  secret: "this is a secret",
  saveUninitialized: false,
  resave: false
}));

// connect-flash
app.use(flash());

// passportJS
app.use(passport.initialize());
app.use(passport.session());

//passport user configuration


// create a user model
let userModel = require('../models/user');
let User = userModel.User;

// create strategy
passport.use(User.createStrategy());

// serilize and deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/contactlist',contactRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
