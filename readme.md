# cli-logger
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url] [![Dev Dependency Status][david-dm-dev-image]][david-dm-dev-url]

a simple cli logger with a prefixed [type] and a bit of color

## table of contents
* [installation](#installation)
* [use](#use)
    * [log.debug( string )](#log.debug--string--)
    * [log.error( string )](#log.error--string--)
    * [log.error( Error )](#log.error--Error--)
    * [log.error( Error, true )](#log.error--Error,-true--)
    * [log.info( string )](#log.info--string--)
    * [log.info( string_colored )](#log.info--string_colored--)
* [license](#license)

## installation
```javascript
npm install dan-nl/cli-logger --save
```

## use
```javascript
var log = require( 'cli-logger' );
```
#### log.debug( string )
```javascript
log.debug( 'my debug message' );
// => [debug] my debug message
```
![log.debug( string )](/../snapshots/debug.png?raw=true)
#### log.error( string )
```javascript
log.error( 'my error message' ); 
// => [error] my error message
```
![log.error( string )](/../snapshots/error.png?raw=true)
#### log.error( Error )
```javascript
log.error( new Error( 'my error message' ) ); 
// => [error] as an error object
```
![log.error( Error )](/../snapshots/error-object.png?raw=true)
### log.error( Error, true )
```javascript
log.error( new Error( 'my error message' ), true );
// => [error] Error: as an error object with stack trace 
// => ( stack trace lines follow )
```
![log.error( Error, true )](/../snapshots/error-with-stacktrace.png?raw=true)
#### log.info( string )
```javascript
log.info( 'my info message' );
// => [info] my info message
```
![log.info( string )](/../snapshots/info.png?raw=true)
#### log.info( string_colored )
```javascript
var chalk = require( 'chalk' );
var message = 'my message with' + chalk.cyan( ' a bit ' ) + chalk.magenta( 'more color' );

log.info( message ); 
// => [info] my message with a bit more color
```
![log.info( string_colored )](/../snapshots/info-more-color.png?raw=true)
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
