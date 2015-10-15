var mongoose = require('mongoose');
var telemetryDb = require('./telemetryDb');

var db = mongoose.connection;
mongoose.connect(telemetryDb.url);

db.on('error', console.error);
db.once('open', function() {
});

var TelemetryDbModel = telemetryDb.telemetryModelClass();

var telemetryInfo = {payloead_name:"pname5",sentence_id:"id5",temp_internal:12345};

// telemetryInfo is the Javascript object containing our new data.
// We create a Mongoose model object from it, then save that to 
// the database
var dbTelemetryInfo = new TelemetryDbModel(telemetryInfo);

dbTelemetryInfo.save(function(err, dbTelemetryInfo) {
  if (err) {
      return console.error(err);
  }
  // We log to the console, just to show what we've saved
  console.log('### saved',dbTelemetryInfo);
});

TelemetryDbModel
.find({sentence_id:'id5'})
// .sort('-time')
// .limit(1)
.exec(function(err, data) {
    if (err) return console.error(err);
    console.log('### find data',data);
});

