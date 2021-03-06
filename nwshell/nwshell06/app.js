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

	var startDate = new Date();
  var startTime = startDate.getTime();

	var showReturn=function(err,output){
		var endTime = new Date().getTime();
		var timeDiff = endTime - startTime;
    var response = err ? {error:err} : output;
    var rett=objFunc(response);
    console.log('rett=',rett);
		res.json({ret:ret,time:startDate,elapsed:ms2Time(timeDiff),output:objFunc(response)});
	};

  try {
		Module = require('module');
		module = new Module('idModule', process.mainModule);
		module.filename = 'filenameModule';
		module.paths = process.mainModule.paths;
		module._compile(req.body.cmd, 'idModule');
		module.loaded = true;
		if (module.exports.execute) {
      output = module.exports.execute(showReturn);
    }
  } catch (err) {
      ret='err';
      showReturn(err.stack);
  }
});

// loop object items turning functions into strings
function objFunc(obj) {
  if (obj===null||obj===undefined){return obj;}
	if (typeof obj == 'function') {
			return getValue(obj); // stringify functions
	}
	if (typeof obj != 'object') {
		return obj;
	}

	if (Array.isArray(obj)) {
		var arr = [];
    obj.forEach(function(item) {
        arr.push(objFunc(item));
    });
    return arr;
	} else {
		var keys = Object.keys(obj);
    var sobj = {};
    keys.forEach(function(k){
        sobj[k] = objFunc(obj[k]);
    });
		return sobj;
	}
}

function objFunc_old(obj) {
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
