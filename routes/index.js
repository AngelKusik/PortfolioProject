var express = require('express');
const router = express.Router()
const User = require('../routes/models/user.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AKEA TECH - Home', page: 'home', displayName: '' });
});
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'AKEA TECH - Home', page: 'home', displayName: '' });
});

/* GET about */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About Us', page: 'about', displayName: '' });
});


/* GET projects */
router.get('/projects', function(req, res, next) {
  res.render('index', { title: 'Projects', page: 'projects', displayName: '' });
});

/* GET services */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services', page: 'services', displayName: '' });
});

module.exports = router;
