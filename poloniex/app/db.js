// lowdb dbjson
const config = require('../app/config').get(); 
const low = require('lowdb');
var db;
if (config.inMemoryLow) {
	db = low();
} else {
	const storage = require('lowdb/lib/storages/file-async'); // file-async ou file-sync
	db = low(config.dbPath, storage);
}

exports.get=function() {
	// Set some defaults if your JSON file is empty
	db.defaults({ trades: [] }).write();
	return(db);
};
