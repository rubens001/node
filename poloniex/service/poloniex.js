//var db = require('../app/db').get();
var config = require('../app/config').get();
var request = require('request');
var db = require('../app/db').get();

exports.get=function(req,res,next) {
  var body = {teste:'teste', msg:'mensagem teste'};
  //res.json(body);
  res.json(db);
};


exports.post=function(req,res,next) {
  var params = req.params;
  var radioCode = req.params.toString().split('/')[0];

  res.json({params:params});
};

/*
ex post json
curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz"}' http://localhost:7070/api/radio/89

*/
