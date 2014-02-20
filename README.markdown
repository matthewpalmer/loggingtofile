# loggingtofile
An easy way to log to a file. Easy to override console.log().

## Installation

```js
npm install loggingtofile
```

## Usage

```js
var Loggingtofile = require('Loggingtofile');

                                // Path to output file
var logger = new Loggingtofile('output.txt');

// Log to the file 'output.txt'
logger.log('This is a log message.');

// Override console.log
console.log = k.log;

// Will be logged to the 'output.txt' file
console.log('This is a console.log message.');
```