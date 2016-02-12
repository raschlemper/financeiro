'use strict';

var express = require('express');
var router = express.Router();
var config = require('../../config/environment');
var controller = require(config.resources.controllers + '/payer.controller');

router.get('/', controller.findAll);

module.exports = router;