'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}
  
var root = path.normalize(__dirname + '/../..');

var all = {

  env: process.env.NODE_ENV,
  ip: process.env.IP || 'localhost',
  port: process.env.PORT || 9000,
  root: root,
  resources: {
    routes:      path.normalize(root + '/api/routes'),
    controllers: path.normalize(root + '/api/controllers'),
    services:    path.normalize(root + '/api/services'),
    models:      path.normalize(root + '/api/models'),
    mocks:       path.normalize(root + '/mocks'),
    auth:        path.normalize(root + '/auth'),
    errors:      path.normalize(root + '/errors')
  },
  seedDB: false,
  secrets: {
    session: 'teratec'
  },
  userRoles: ['guest', 'user', 'admin'],
  mongo: {
    options: {
      db: {
        safe: true
      }
    }
  }

};

module.exports = _.merge(all, require('./' + process.env.NODE_ENV + '.js') || {});