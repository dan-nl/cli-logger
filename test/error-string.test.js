'use strict';

var log = require( 'cli-logger' );
var sinon = require( 'sinon' );
var test = require( 'tap' ).test;

test( 'log.error( message ) string', function ( t ) {
  var message = 'my error message';

  sinon.stub( console, 'error' );

  log.error( message );

  t.ok( console.error.calledOnce, 'should call console.error() once' );

  t.ok( console.error.calledWith(
      '[error] ' + message ),
    'should call console.error() with [error] plus the message provided'
  );

  console.error.restore();
  t.end();
} );
