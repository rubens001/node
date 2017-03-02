//var db = require('../app/db').get();
var config = require('../app/config').get();
var request = require('request');
var mongojs = require('mongojs');
var db = require('../app/db').get();
var uuid = require('node-uuid');

var dtLastExecution;

exports.get=function(req,res,next) {
  getRadioInfo('89',function(body){
    res.json(body);
  });
};


exports.post=function(req,res,next) {
  var params = req.params;
  var radioCode = req.params.toString().split('/')[0];

  getRadioInfo('89',function(body){
    if (!body || !body.musicas[0] || !body.musicas[0].tocando[0]) {
      console.error("getRadioInfo radioCode="+radioCode+" notfound");
      res.json({msg:"notfound"});
      return;
    }
    var radioSong = body.musicas[0].tocando[0];
    radioSong.singer=radioSong.singer ? radioSong.singer.trim() : undefined;
    radioSong.song=radioSong.song ? radioSong.song.trim() : undefined;
    db.songs.findOne({artist:radioSong.singer,song:radioSong.song},function (err, doc) {
      if (err){console.error(err);res.json({error:err});return;}
      if (!doc){ // Novo song : insere songs + journal
        var songId = uuid.v4();
        db.songs.insert({_id:songId,artist:radioSong.singer,song:radioSong.song,date:(new Date()).toISOString(),
          bio:radioSong.bio,cover:radioSong.cover,covermega:radioSong.covermega,background:radioSong.background,lyrics:radioSong.letra},function(errIns,docIns){
            db.journal.insert({_id:uuid.v4(),radioCode:radioCode,songId:songId,initDate:(new Date()).toISOString(),endDate:(new Date()).toISOString()});
            res.json(docIns);
          });
      }else{ // song ja existe : insere ou atualiza journal
        journalMerge(radioCode,doc._id);
        res.json(doc);
      }
    });
    // res.json(body);
  });
};

// insere ou altera journal
function journalMerge(radioCode, songId) {
  var dtNow = (new Date()).toISOString();
  var endDate = dtLastExecution || new Date();
  // endDate.setMinutes(endDate.getMinutes() - 10); // -10 minutes
  endDate = endDate.toISOString();

  var db = require('../app/db').get();
  var query={radioCode:radioCode,songId:songId,endDate:{$gte:endDate}};
  db.journal.findOne(query,function(err,doc){
    dtLastExecution = new Date();
    if (doc===null) {
      db.journal.insert({_id:uuid.v4(),radioCode:radioCode,songId:songId,initDate:dtLastExecution.toISOString(),endDate:dtLastExecution.toISOString()});
    } else {
      db.journal.findAndModify({
        query: query,
        update: { $set: { endDate: dtLastExecution.toISOString() } }
      }, function (err, doc, lastErrorObject) {
        if (err) {
          console.error('### error update, err=',err);
        }
      });

    }
  });
}

function getRadioInfo(radioCode,manageBodyCb) {
    var url = config.radio["89"].url + '?_=' + (new Date()).getTime();
    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            manageBodyCb(body);
        } else {
            manageBodyCb({msg:"notfound"});
        }
    });
}

/*
ex post json
curl -H "Content-Type: application/json" -X POST -d '{"username":"xyz"}' http://localhost:7070/api/radio/89

*/
