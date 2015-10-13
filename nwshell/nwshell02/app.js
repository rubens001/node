var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var bodyParser = require('body-parser');
var vm = require('vm');

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
	var output = vm.runInThisContext(req.body.cmd);
	// console.log('output=', output);
	res.json({ret:'ok',time:(new Date()),output:output});
});
