function Loggingtofile(logFile) {
  this.logFile = logFile;
  this.writeStream = fs.createWriteStream(this.logFile, {flags: 'w'});

  return {
    log: function() {
          var args = Array.prototype.slice.call(arguments);
          args.forEach(function(i) {
            var now = new Date();
            this.writeStream.write(now.toDateString() + ' ' + now.toTimeString() +': ' + i.toString() + '\n');
          }, this);
        }.bind(this)
  };
}

/**
 * Expose Loggingtofile
 * @type {Function}
 */
module.exports = Loggingtofile;