var mongoose = require('mongoose');
// var telemetryDb = require('./telemetryDb');

var db = mongoose.connection;
// var connect = mongoose.connect('mongodb://localhost/telemetryDb');
var connect = mongoose.connect('mongodb://localhost/db');

db.on('error', console.error);
db.once('open', function() {
});

console.log("### connect,",connect);

console.log("### connect.db",connect.connections);
console.log("### connections.length",connect.connections.length);
console.log("### connections[0].db",connect.connections[0].db);
console.log("### connections[0].db.databaseName:",connect.connections[0].db.databaseName);

// model function (name, schema, collection, skipInit)
var model = mongoose.model;
// console.log("### model",model);

console.log("### mongoose.connections",mongoose.connections);
console.log("### mongoose.connections",mongoose.connections[0].options);

// var TelemetryDbModel = telemetryDb.telemetryModelClass();

// var telemetryInfo = {payloead_name:"pname4",sentence_id:"id4",temp_internal:1234};

// telemetryInfo is the Javascript object containing our new data.
// We create a Mongoose model object from it, then save that to 
// the database
// var dbTelemetryInfo = new TelemetryDbModel(telemetryInfo);

// dbTelemetryInfo.save(function(err, dbTelemetryInfo) {
//   if (err) {
//       return console.error(err);
//   }
//   // We log to the console, just to show what we've saved
//   console.log('### saved',dbTelemetryInfo);
// });

// TelemetryDbModel
// .find({sentence_id:'id4'})
// // .sort('-time')
// // .limit(1)
// .exec(function(err, data) {
//     if (err) return console.error(err);
//     console.log('### find data',data);
// });

