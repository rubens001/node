'use strict'
var express = require('express');
var mysql = require('mysql');
var mysqltorest  = require('mysql-to-rest');
var app = express();

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'restapp',
  password : 'restapp',
  database : 'restapp'
});

var api = mysqltorest(app,connection);

// start the server 
app.listen(8000);
