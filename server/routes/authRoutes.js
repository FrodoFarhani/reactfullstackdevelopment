const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );
  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );
  /**
   * passport automatically attached the user property to the req object
   */
  app.get('/api/logout', (req, res) => {
    //logout also attached to the req so we can use it!
    req.logout();
    //the result should be null because the user just loged out!
    //res.send(req.user);
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
