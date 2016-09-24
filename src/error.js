'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @param {Error|string} err
 * @param {boolean} [stack_trace]
 * @returns {void}
 */
function error( err, stack_trace ) {
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
}

module.exports = error;
