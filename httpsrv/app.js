var express = require('express'),
app = express(),
port = process.env.PORT || 8000,
path = process.env.DIR || __dirname + '/public';

console.log('dir='+path);

app.use(express.static(path));
  var server = app.listen(port, function () {
  var sport = server.address().port;
  console.log('Server listening at http://localhost:%s', sport);
});

app.all('/api/*', function (req, res, next) {
  // console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});

// /api/info
app.get('/api/info', function (req, res, next) {
  res.send('info');
});

// /api/user
app.get('/api/user', function (req, res, next) {
  var user = {name:"Albert",lastName:"Einstein"};
  res.json(user);
});

// /api/company
app.get('/api/company', function (req, res, next) {
	var company = require('./api/company');
	company.execute(req,res,next);
});
