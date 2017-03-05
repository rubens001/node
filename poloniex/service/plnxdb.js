var db = require('../app/db').get();
var session=require('../app/session');
var plnx = require('plnx');
var fs = require('fs');

var plnxInterval;

exports.get=function(req,res,next) {
  if (!session.validRole(req,res,'ROLE_ADM_ROCK')){return;}

  var path = req.path;
  if (path.indexOf('/start') > 0) {
    startPlnxTicker();
  }
  if (path.indexOf('/stop') > 0) {
    stopPlnxTicker();
  }
  if (path.indexOf('/csv') > 0) {
    plnxCsv();
  }

	res.json({msg:'ok'});
};

exports.post=function(req,res,next) {
  if (!session.validRole(req,res,'ROLE_ADM_ROCK')){return;}

  var body=req.body;
  var url=req.url;
  var pathParam = req.params.radioId;
  var param2 = req.param('p2');
  res.json({url:url,pathParam:pathParam,p2:param2,body:body});
};

function startPlnxTicker() {
  plnxInterval = setInterval(function(){ plnx.returnTicker(tickerCB); }, 1000);
}

function stopPlnxTicker() {
  clearInterval(plnxInterval);
}

function tickerCB(err,data) {
	if (err) { console.error('tickerCB err=',err); return; }
  
  var data2 = {date:new Date().toISOString()};
  data2.USDT_BTC = data.USDT_BTC;
  db.get('trades').push(data2).last().write();
}

function plnxCsv() {
  var stream = fs.createWriteStream("/tmp/trades.csv");
  stream.write("date,trade,id,last,lowestAsk,highestBid,percentChange,baseVolume,quoteVolume,isFrozen,high24hr,low24hr\n");
  db.get('trades').value().forEach(function (obj) {
    var str = obj.date + ',';
    for(var key in obj){
      if (key != 'date') {
        str = str+key+',';
        var obj2 = obj[key];
         for(var key2 in obj2){
           str = str+obj2[key2]+',';
         }
      }
   }
   stream.write(str + "\n");
  });
  stream.end();
}