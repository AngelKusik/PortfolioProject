const mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/users/login');
var registerRouter = require('./routes/users/register');
var contactRouter = require('./routes/contacts/contacts');
var businessContactRouter = require('./routes/contacts/business-contacts');
var logoutRouter = require('./routes/users/logout');

const app = express();

// Set Up Settion
const session = require('express-session');

// Set up session middleware
app.use(session({
  secret: 'angelicaeisha2023',
  resave: false,
  saveUninitialized: false
}));

// Connect to MongoDB online
mongoose.connect('mongodb+srv://angelicakusik:8RacUbdRqyoQzXkL@portfolio.oxgbw37.mongodb.net/portfolio', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
  .then(() => {
    console.log('Connected to MongoDB online');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB online', error);
  });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/about', indexRouter);
app.use('/projects', indexRouter);
app.use('/services', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/contacts', contactRouter);
app.use('/contacts/update', contactRouter);
app.use('/contacts/delete', contactRouter);
app.use('/business-contacts', businessContactRouter);
app.use('/logout', logoutRouter);


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
