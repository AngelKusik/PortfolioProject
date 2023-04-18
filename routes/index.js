var express = require('express');
const router = express.Router()
const User = require('../routes/models/user.model');

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

// /* GET business-contact */
// router.get('/business-contacts', function(req, res, next) {
//   res.render('index', { title: 'Business Contacts', page: 'business-contacts', displayName: '' });
// });

// /* GET contacts */
// router.get('/contacts', function(req, res, next) {
//   res.render('index', { title: 'Contacts', page: 'contacts', displayName: '' });
// });


/* GET projects */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects', displayName: '' });
});

// /* GET registration */
// router.get('/registration', function(req, res, next) {
//   res.render('index', { title: 'Registration', page: 'registration', displayName: '' });
// });

/* GET services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services', displayName: '' });
});

// /* GET update-contacts */
// router.get('/update-contacts', function(req, res, next) {
//   res.render('index', { title: 'Update Contacts', page: 'update-contacts', displayName: '' });
// });


/** Post */

module.exports = router;
