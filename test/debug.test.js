'use strict';

var log = require( '../src/index' );
var sinon = require( 'sinon' );
var test = require( 'tap' ).test;

test( 'log.debug( message )', function ( t ) {
  var message = 'my debug message';

  sinon.stub( console, 'log' );

  log.debug( message );

  t.ok( console.log.calledOnce, 'should call console.log() once' );

  t.ok( console.log.calledWith( '[debug] ' + message ),
    'should call console.log() with [debug] plus the message provided'
  );

  console.log.restore();
  t.end();
} );
