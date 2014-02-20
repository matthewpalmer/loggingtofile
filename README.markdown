# loggingtofile
An easy way to log to a file. Makes it very easy to override console.log(). I hope to add support for different structures, e.g. HTML lists, Markdown, csv, tables, etc. Suggestions are welcome.

## Installation

```js
npm install loggingtofile
```

## Usage

```js
var Loggingtofile = require('Loggingtofile');

// Instantiate. Tell the module the path of your log file.
var logger = new Loggingtofile('output.txt');

// Log to the file 'output.txt'
logger.log('This is a log message.');

// Override console.log
console.log = k.log;

// Will be logged to the 'output.txt' file
console.log('This is a console.log message.');
```

**Output**

```
Thu Feb 20 2014 18:05:08 GMT+1100 (EST): This is a log message.
Thu Feb 20 2014 18:05:08 GMT+1100 (EST): This is a console.log message
```