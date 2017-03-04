// lowdb dbjson
const config = require('../app/config').get(); 
const low = require('lowdb');
const storage = require('lowdb/lib/storages/file-async'); // ou file-sync
const db = low(config.dbPath, { storage });

exports.get=function() {
	return(db);
	// return(require('lib/db'));
};
