'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * module variables
 */
var log = {};

/**
 * @param {string} message
 * @returns {void}
 */
log.debug = function logDebug( message ) {
  var message_colored = '';

  message_colored += chalk.bold.green( '[debug] ' );
  message_colored += message;
  console.log( message_colored );
};

/**
 * @param {Error|string} err
 * @param {boolean} [stack_trace]
 * @returns {void}
 */
log.error = function logError( err, stack_trace ) {
  var message_colored = '';

  message_colored += chalk.bold.red( '[error] ' );

  if ( err instanceof Error ) {
    if ( stack_trace ) {
      message_colored += err.stack;
    } else {
      message_colored += err.message;
    }
  } else {
    message_colored += err;
  }

  console.error( message_colored );
};

/**
 * @param {string} message
 * @returns {void}
 */
log.info = function logInfo( message ) {
  var message_colored = '';

  message_colored += chalk.bold.blue( '[info] ' );
  message_colored += message;
  console.log( message_colored );
};

module.exports = log;
