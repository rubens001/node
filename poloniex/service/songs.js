var db = require('../app/db').get();

exports.get=function(req,res,next) {
  db.songs.find({}).limit(1500).skip(0, function (err, docs) {
    if(err){errorSend(err,res);return;}
    res.json(docs);
  });
};

exports.post=function(req,res,next) {
  var body=req.body;
  var url=req.url;
  var param = req.param;
  res.json({url:url,param:param,body:body});
};

// ex : /api/songs/find?limit=3&skip=3
// http://localhost:7070/api/songs/find?q={"artist%22:%22ALABAMA%20SHAKES"}
exports.find=function(req,res,next) {
  var limit=1500;
  var skip=0;
  var query={};
  var pLimit=req.param('limit');
  if(pLimit){
    limit=parseInt(pLimit);
  }
  var pSkip=req.param('skip');
  if(pSkip){
    skip=parseInt(pSkip);
  }
  var pQuery=req.param('q');
  query=JSON.parse(pQuery);

  db.songs.find(query).limit(limit).skip(skip, function (err, docs) {
    if(err){errorSend(err,res);return;}
    res.json(docs);
  });
};

function errorSend(err,res){
  console.error(err);
  res.status(500).json({msg:'Server problems',error:err});
}
/*
89 :
{
"singer": "A RÁDIO ROCK",
"song": "Viva o Rock",
"bio": "",
"cover": "http://player.radiorock.com.br/v2/images/album/album.jpg",
"covermega": "http://player.radiorock.com.br/v2/images/album/album.jpg",
"background": "http://player.radiorock.com.br/v2/background89/897.jpg",
"letra": false
}

songs :
{
"artist": "A RÁDIO ROCK",
"song": "Viva o Rock",
"bio": "",
"cover": "http://player.radiorock.com.br/v2/images/album/album.jpg",
"covermega": "http://player.radiorock.com.br/v2/images/album/album.jpg",
"background": "http://player.radiorock.com.br/v2/background89/897.jpg",
"lyrics": false
}
*/
