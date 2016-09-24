'use strict';

var log = require( '../src/index' );
var sinon = require( 'sinon' );
var test = require( 'tap' ).test;

test( 'log.error( message ) Error object with stack trace', function ( t ) {
  var error = new Error( 'my error object' );

  sinon.stub( console, 'error' );

  log.error( error, true );

  t.ok( console.error.calledOnce, 'should call console.error() once' );

  t.ok( console.error.calledWith(
      '[error] ' + error.stack ),
    'should call console.error() with [error] plus the Error.stack trace'
  );

  console.error.restore();
  t.end();
} );
