'use strict'
var http = require("http");
var port = 8000;

var server = http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write('<!DOCTYPE \"html\">');
  response.write('<html>');
  response.write('<head>');
  response.write('<title>Hello Node.js</title>');
  response.write('</head>');
  response.write('<body>');
  response.write('Hello Node.js!');
  response.write('</body>');
  response.write('</html>');
  response.end();
});

server.listen(port);
console.log("Server ok -> http://localhost:" + port);