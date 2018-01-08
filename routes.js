/**
 * Main application routes
 */

'use strict';

const path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('./api/thing'));
  app.use('/api/users', require('./api/user'));

  app.use('/auth', require('./auth'));

  app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.sendStatus(401);
    }
    else {
      next();
    }
  });

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(function(req, res) {
      res.sendStatus(404);
    });

  // All other routes (except '/docs') should redirect to the index.html
  app.route('/(!docs)*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
