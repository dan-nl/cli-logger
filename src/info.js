'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @param {string} message
 * @returns {void}
 */
function info( message ) {
  var message_colored = '';

  message_colored += chalk.bold.blue( '[info] ' );
  message_colored += message;
  console.log( message_colored );
}

module.exports = info;
