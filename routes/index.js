// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
const router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', displayName: '' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', page: 'home', displayName: '' });
});

/* GET about */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Me', page: 'about', displayName: '' });
});

/* GET business-contact */
router.get('/business-contacts', function(req, res, next) {
  res.render('index', { title: 'Business Contacts', page: 'business-contacts', displayName: '' });
});

/* GET contacts */
router.get('/contacts', function(req, res, next) {
  res.render('index', { title: 'contacts', page: 'contacts', displayName: '' });
});

/* GET login */
router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Login', page: 'login', displayName: '' });
});

/* GET projects */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects', displayName: '' });
});

/* GET registration */
router.get('/registration', function(req, res, next) {
  res.render('index', { title: 'Registration', page: 'registration', displayName: '' });
});

/* GET services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services', displayName: '' });
});

/* GET update-contacts */
router.get('/update-contacts', function(req, res, next) {
  res.render('index', { title: 'Update Contacts', page: 'update-contacts', displayName: '' });
});

module.exports = router;
