// General Configurations
exports.get=function() {
	var config =
	{name:"poloniex",
	pathResource:'public',
	port:process.env.PORT || 9191,
	dbPath:'/home/rubens/Documents/dbjson/db.json',
	};

	return(config);
};
