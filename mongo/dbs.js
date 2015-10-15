'use strict'
var Db = require('mongodb').Db,
    Server = require('mongodb').Server;

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