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
