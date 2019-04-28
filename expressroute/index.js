var express = require('express');
var app = express();

var birds = require('./birds');


console.log('### init');

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
  });

// http://localhost:3000/birds e http://localhost:3000/birds/about
app.use('/birds', birds);

app.listen(3000);

console.log('### end');
