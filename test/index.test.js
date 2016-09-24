'use strict';

var log = require( '../src/index' );
var sinon = require( 'sinon' );
var test = require( 'tap' ).test;

test( 'log.debug( message )', function ( t ) {
  var message = 'my debug message';

  sinon.stub( console, 'log' );
  log.debug( message );

  t.ok( console.log.calledOnce, 'should call console.log() once' );

  t.ok( console.log.calledWith(
      '[debug] ' + message ),
    'should call console.log() with [debug] plus the message provided'
  );

  console.log.restore();
  t.end();
} );

test( 'log.error( message ) string', function ( t ) {
  var message = 'my error message';

  sinon.stub( console, 'error' );
  log.error( message );

  t.ok( console.error.calledOnce, 'should call console.error() once' );

  t.ok( console.error.calledWith(
      '[error] ' + message ),
    'should call console.error() with [error] plus the string provided'
  );

  console.error.restore();
  t.end();
} );

test( 'log.error( message ) object', function ( t ) {
  var error = new Error( 'my error object' );

  sinon.stub( console, 'error' );
  log.error( error );

  t.ok( console.error.calledOnce, 'should call console.error() once' );

  t.ok( console.error.calledWith(
      '[error] ' + error.message ),
    'should call console.error() with [error] plus the Error.message'
  );

  console.error.restore();
  t.end();
} );

test( 'log.error( message ) object with stack trace', function ( t ) {
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

test( 'log.info( message )', function ( t ) {
  var message = 'my info message';

  sinon.stub( console, 'log' );
  log.info( message );
  t.ok( console.log.calledOnce, 'should call console.log() once' );
  t.ok( console.log.calledWith(
      '[info] ' + message ),
    'should call console.log() with [info] plus the message provided'
  );
  console.log.restore();
  t.end();
} );
