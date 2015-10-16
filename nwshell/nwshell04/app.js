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

    var startTime = new Date().getTime();

    try {
        if (module.exports.execute) {
            output = module.exports.execute();
        }
    } catch (err) {
        ret='err';
        output = err.stack;
    }

		var endTime = new Date().getTime();
		var timeDiff = endTime - startTime;

		res.json({ret:ret,time:(new Date()),elapsed:ms2Time(timeDiff),output:objFunc(output)});
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

function ms2Time(ms) {
    var secs = ms / 1000;
    ms = Math.floor(ms % 1000);
    var minutes = secs / 60;
    secs = Math.floor(secs % 60);
    var hours = minutes / 60;
    minutes = Math.floor(minutes % 60);
    hours = Math.floor(hours % 24);
    return hours + ":" + minutes + ":" + secs + "." + ms;
}
