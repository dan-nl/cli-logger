# cli-logger
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url]

a simple cli logger with a prefixed [type] and a bit of color

## table of contents
* [installation](#installation)
* [use](#use)
    * [basic](#basic)
    * [error object](#error-object)
    * [a btit more color](#a-bit-more-color)
* [license](#license)

## installation
```javascript
npm install dan-nl/cli-logger --save
```

## use
### basic
```javascript
var log = require( 'cli-logger' );

log.debug( 'my debug message' );
// => [debug] my debug message

log.error( 'my error message' ); 
// => [error] my error message

log.info( 'my info message' );
// => [info] my info message
```

### error object
```javascript
var log = require( 'cli-logger' );

log.error( new Error( 'as an error object' ) ); 
// => [error] as an error object

log.error( new Error( 'as an error object with stack trace' ), true );
// => [error] Error: as an error object with stack trace 
// => ( stack trace lines follow )
```

### a bit more color
```javascript
var chalk = require( 'chalk' );
var log = require( 'cli-logger' );
var message = 'my message with ';

message += chalk.blue( 'a bit ' );
message += chalk.magenta( 'more color' );

log.info( message ); 
// => [info] my message with a bit more color
```


## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/dan-nl/cli-logger/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/dan-nl/cli-logger?branch=master
[david-dm-image]: https://david-dm.org/dan-nl/cli-logger.svg
[david-dm-url]: https://david-dm.org/dan-nl/cli-logger
[david-dm-dev-image]: https://david-dm.org/dan-nl/cli-logger/dev-status.svg
[david-dm-dev-url]: https://david-dm.org/dan-nl/cli-logger?type=dev
[mit-license]: https://raw.githubusercontent.com/dan-nl/cli-logger/master/license.txt
[travis-image]: https://travis-ci.org/dan-nl/cli-logger.svg?branch=master
[travis-url]: https://travis-ci.org/dan-nl/cli-logger
