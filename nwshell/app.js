var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser')

app = express(),
port = process.env.PORT || 8000,
path = process.env.RESOURCE || __dirname + '/public';

console.log('port=' + port + ' resource='+path);

app.use(express.static(path));
app.use(bodyParser.json()); // parse application/json so "body" became an object
app.listen(port);

app.post('/nwshell',function(req, res) {
	// console.log('post em nwshell, url=', req.url);
	console.log('post em nwshell, scmd.cmd=', req.body.cmd);
	res.json({ret:'ok',time:(new Date())});
});
