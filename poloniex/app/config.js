// General Configurations
exports.get=function() {
	var config =
	{name:"poloniex",
	homePath : process.env.HOME || process.env.USERPROFILE,
	pathResource:'public',
	port:process.env.PORT || 9191,
	dbPath: (process.env.HOME || process.env.USERPROFILE) + '/Documents/dbjson/db.json',
	};

	return(config);
};
