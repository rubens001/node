var express = require('express');
var mongodb = require('mongodb');
var app = express();

var Db = mongodb.Db,
    Server = mongodb.Server;

///////// just list DBs
var db = new Db('admin', new Server('localhost', 27017));
// Establish connection to db
db.open(function(err, db) {

  // Use the admin database for the operation
  var adminDb = db.admin();

  // List all the available databases
  adminDb.listDatabases(function(err, dbs) {
    console.log('### dbs=',dbs);
    db.close();
  });
});
// Dbs

var MONGODB_URI = 'mongodb://localhost/telemetryDb';
// var MONGODB_URI = 'mongodb://localhost';

var db;
var coll;

// Initialize connection once

var conn = mongodb.MongoClient.connect(MONGODB_URI, function(err, database) {
  if(err) throw err;

  db = database;

	db.collections(function(err, collections) {
		collections.forEach(function (collection) {
			console.log('### collection.name ',collection.s.name);
		});
	});

  coll = db.collection('telemetryinfos');

  app.listen(8000);
  console.log('Listening on port 8000');
});

// var dbNames = connection.getDBNames();
// var connection = new Mongo();
// var dbNames = connection.getDBNames();
// console.log('### dbNames',dbNames);
// console.log('### conn=',conn);

// var mcli = new mongodb.MongoClient();
// console.log('### mcli',mcli);


// Reuse database/collection object 

app.get('/', function(req, res) { 
  coll.find({}, function(err, docs) {
    docs.each(function(err, doc) {
      if(doc) {
        res.write(JSON.stringify(doc) + "\n");
      }
      else {
        res.end();
      }
    });
  });
});