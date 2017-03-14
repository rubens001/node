// lowdb dbjson
const config = require('../app/config').get(); 
const low = require('lowdb');
const storage = require('lowdb/lib/storages/file-sync'); // file-async ou file-sync
const db = config.inMemoryLow ? low() : low(config.dbPath, { storage });

exports.get=function() {
	// Set some defaults if your JSON file is empty
	db.defaults({ trades: [] }).write();
	return(db);
};
