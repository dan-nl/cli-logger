'use strict';

/**
 * module dependencies
 */
var debug = require( './debug' );
var info = require( './info' );
var error = require( './error' );

/**
 * @type {{debug: debug, error: error, info: info}}
 */
module.exports = {
  debug: debug,
  error: error,
  info: info
};
