'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @param {string} message
 * @returns {void}
 */
function debug( message ) {
  var message_colored = '';

  message_colored += chalk.bold.green( '[debug] ' );
  message_colored += message;
  console.log( message_colored );
}

module.exports = debug;
