'use strict'
exports.execute=function(req,res,next) {
	var co = {name:"7chaos",address:"Paulista, 123"};
	res.json(co);
};