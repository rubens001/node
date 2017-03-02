exports.get=function(req,res,next) {
  // evita 304 para servicos
  req.headers['if-none-match'] = 'no-match-for-this';

	var co = {name:"7chaos",address:"Paulista, 123"};
	res.json(co);
};
