'use strict';

var log = require( '../src/index' );
var sinon = require( 'sinon' );
var test = require( 'tap' ).test;

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
