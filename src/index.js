'use strict';

/**
 * module dependencies
 */
var debug = require( './debug' );
var info = require( './info' );
var error = require( './error' );

/**
 * @type {Object} log
 * @type {Function} log.debug
 * @type {Function} log.error
 * @type {Function} log.info
 */
var log = {
  debug: debug,
  error: error,
  info: info
};

module.exports = log;