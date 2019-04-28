var express  = require('express');
var app      = express();
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:8080';

app.all("*", function(req, res) {
    console.log('req.headers', req.headers);
    apiProxy.web(req, res, {target: serverOne});
});

app.listen(7070);

console.log('7070 -> 8080');