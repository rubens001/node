var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

app = express(),
port = process.env.PORT || 8000,
path = process.env.RESOURCE || __dirname + '/public';

console.log('port=' + port + ' resource='+path);

app.use(express.static(path));

// create application/json parser 
var jsonParser = bodyParser.json();
 
// create application/x-www-form-urlencoded parser 
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.listen(port);

void function () {
    var Module,
        path,
        cache,
        dirname,
        resolve,
        sep,
        parseFilename;

    Module = require('module');
    path = require('path');

    cache = Module._cache;
    resolveFilename = Module._resolveFilename;

    dirname = path.dirname;
    resolve = path.resolve;
    sep = path.sep;

    parseFilename = function parseFilename(request, parent) {
        var filename,
            lastChar,
            length;

        filename = resolve(dirname(parent.filename), request);
        length = filename.length;

        if (filename.lastIndexOf('.js') !== length - 3) {
            lastChar = filename.charAt(length - 1);

            if (lastChar === '.' || lastChar === ':') {
                lastChar = sep;
                filename += lastChar;
            }
            if (lastChar === sep) {
                filename += 'index';
            }
            filename += '.js';
        }
        return filename;
    };

    Module._resolveFilename = function _resolveFilename(request, parent) {
        var filename;

        filename = parseFilename(request, parent);

        if (cache.hasOwnProperty(filename)) {
            return filename;
        }

        return resolveFilename(request, parent);
    };

    Module._register = function register(id, parent, src) {
        var filename,
            module,
            code;

        filename = parseFilename(id, parent);

        module = new Module(id, parent);

        code = typeof src === 'function'
            ? 'void ' + src.toString() + '();'
            : src;

        module.filename = filename;
        module.paths = parent.paths;
        module._compile(code, id);
        module.loaded = true;

        cache[filename] = module;

        return module;
    };
}();

app.post('/nwshell',jsonParser,function(req, res) {
	// console.log('post em nwshell, scmd.cmd=', req.body.cmd);
	
	var Module,
        parent,
        child;

    Module = require('module');
  //   console.log('Module', Module);
 	// console.log('process.mainModule', process.mainModule);

 	Module._register('parent', process.mainModule, '\
        module.exports = {\
            name: module.filename,\
            getChild: function getChild() {\
                return \'123\';\
            }\
        };\
    ');

 	parent = require('parent');
 	console.log('parent=', parent);
 	console.log('parent.getChild=', parent.getChild());

 	// require(\'child\')

	// console.log('output=', output);
	res.json({ret:'ok',time:(new Date()),output:'output'});
});
