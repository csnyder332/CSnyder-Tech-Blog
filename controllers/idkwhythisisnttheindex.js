const router = require('express').Router();
// Import the custom middleware
//const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('homepage');
});

// Login route
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect to the homepage
    if (req.session.loggedIn) {
      res.redirect('/homepage');
      return;
    }
    // Otherwise, render the 'login' template
    res.render('login');
  });

  module.exports=router