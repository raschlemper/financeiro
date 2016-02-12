'use strict';

var config = require('./config/environment');

module.exports = function(app) {

  app.use('/api/payer', require(config.resources.routes + '/payer.route'));

};
