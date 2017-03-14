// General Configurations
exports.get=function() {
	var config =
	{name:"poloniex",
	homePath : process.env.HOME || process.env.USERPROFILE,
	pathResource:'public',
	port:process.env.PORT || 9191,
	writeLow: process.env.WRITE_LOW || false,
	writeMongo: process.env.WRITE_MONGO || false,
	inMemoryLow: process.env.IN_MEMORY_LOW || false,
	dbPath: (process.env.HOME || process.env.USERPROFILE) + '/Documents/dbjson/db.json',
	mUri:'https://api.mlab.com/api/1/databases/trades',
	apiKey:'v0PsRPBQ9ky8UG7WCLFO3fZRHMIzS9FU'
	};

	return(config);
};
