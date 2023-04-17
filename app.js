var mongoose = require('mongoose');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/users/home');
var aboutRouter = require('./routes/users/about');
var projectsRouter = require('./routes/users/projects');
var servicesRouter = require('./routes/users/services');
var contactRouter = require('./routes/users/contact');
var loginRouter = require('./routes/users/login');
var registerRouter = require('./routes/users/register');
var contactRouter = require('./routes/contacts/contacts');
var businessContactRouter = require('./routes/contacts/business-contacts');

var app = express();

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

//app.use('/', indexRouter);
app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/services', servicesRouter);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/contacts', contactRouter);
app.use('/contacts/update', contactRouter);
app.use('/contacts/delete', contactRouter);
app.use('/business-contacts', businessContactRouter);


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
