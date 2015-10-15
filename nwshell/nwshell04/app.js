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

app.post('/nwshell',jsonParser,function(req, res) {
	// console.log('post em nwshell, scmd.cmd=', req.body.cmd);
	var module, output, ret;
    ret = 'ok';
    Module = require('module');
	module = new Module('idModule', process.mainModule);
    module.filename = 'filenameModule';
    module.paths = process.mainModule.paths;
    module._compile(req.body.cmd, 'idModule');
    module.loaded = true;

    try {
        if (module.exports.execute) {
            output = module.exports.execute();
        }
    } catch (err) {
        ret='err';
        output = err.stack;
    }

	res.json({ret:ret,time:(new Date()),output:objFunc(output)});
});

// obtem objeto transformando functions em strings
function objFunc(obj) {
    if (typeof obj == 'function' || typeof obj == 'undefined' || typeof obj == 'string' || typeof obj == 'number' || typeof obj == 'boolean' || Array.isArray(obj)) {
        return getValue(obj);
    }
    var keys = Object.keys(obj);
    var sobj = {};
    keys.forEach(function(k){
        sobj[k] = getValue(obj[k]);
    });
    return sobj;
}

function getValue(item) {
    if (typeof item == 'function') {
        return item.toString();
    } else if (typeof item == 'undefined') {
        return undefined;
    } else if (Array.isArray(item)) {
        return getArr(item);
    } else { // obj nao array
        return item;
    }
}

function getArr(objArr){
    var arr = [];
    objArr.forEach(function(item) {
        arr.push(objFunc(item));
    });
    return arr;
}