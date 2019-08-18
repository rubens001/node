const stream = require('stream');

class LineTransform extends stream.Transform {
    constructor(options) {
        options = options || {};
        super(options);

        this.separator = options.separator || '[\r\n|\n|\r]+';
        this.chunkRegEx = new RegExp(this.separator);
        this.remnantRegEx = new RegExp(this.separator + '$');

        this.remnant = '';
    }
    _transform(chunk, encoding, callback) {
        // Convert buffer to a string for splitting
        if (Buffer.isBuffer(chunk)) {
            chunk = chunk.toString('utf8');
        }
      
        if (1 < 10) {
            console.log('### chunk', chunk);
            this.push(chunk);
            return setImmediate(callback);
        }
        

        // Prepend any remnant
        if (this.remnant.length > 0) {
            chunk = this.remnant + chunk;
            this.remnant = '';
        }
      
        // Split lines
        var lines = chunk.split(this.chunkRegEx);
      
        // Check to see if the chunk ends exactly with the separator      
        if (chunk.search(this.remnantRegEx) === -1) {
            // It doesn't so save off the remnant
            this.remnant = lines.pop();
            }
      
        // Push each line
        lines.forEach(function (line) {
            // if (line.indexOf('"cache-control"') >= 0) {
            //     console.log('### linha contem cache-control');
            //     line = line.replace('cache-control', 'cache-controloco');
            // }
            if (line !== '') { this.push(line); } 
        }, this);
      
        // console.log('### lines', lines);

        return setImmediate(callback);
    }

    _flush(callback) {
        // Do we have a remnant?
        if (this.remnant.length > 0) {
            this.push(this.remnant);
            this.remnant = '';
        }
      
        return setImmediate(callback);
    }
}

module.exports = LineTransform;