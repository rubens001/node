var db = require('../app/db').get();
var config = require('../app/config').get();
var session=require('../app/session');
var plnx = require('plnx');
var fs = require('fs');

var plnxInterval;
var wssession;
var last_USDT_BTC=0;

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
  if (path.indexOf('/push') > 0) {
    plnxPush();
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

// start interval
function startPlnxTicker() {
  plnxInterval = setInterval(function(){ plnx.returnTicker(tickerCB); }, 1000);
}

// stop interval
function stopPlnxTicker() {
  clearInterval(plnxInterval);
}

// grava lowdb
function tickerCB(err,data) {
	if (err) { console.error('tickerCB err=',err); return; }
  
  var data2 = {date:new Date().toISOString()};
  data2.USDT_BTC = data.USDT_BTC;
  // data2.USDT_LTC = data.USDT_LTC;
  if (last_USDT_BTC != data.USDT_BTC.last) {
    last_USDT_BTC = data.USDT_BTC.last;
    db.get('trades').push(data2).last().write();
  }
}

// cria csv com conteudo de lowdb
function plnxCsv() {
  const decChar = ',';
  console.log('### csv : ' + config.homePath + '/Documents/dbjson/trades.csv');
  var stream = fs.createWriteStream(config.homePath + '/Documents/dbjson/trades.csv');
  stream.write("date\tid\tlast USDT_BTC\tlowestAsk\thighestBid\tpercentChange\tbaseVolume\tquoteVolume\tisFrozen\thigh24hr\tlow24hr\t\n");
  db.get('trades').value().forEach(function (obj) {
    var dtRegional = obj.date.replace('T',' ');
    dtRegional = dtRegional.replace('Z','');
    var str = dtRegional + '\t';
    for(var key in obj){
      if (key != 'date') {
        // str = str+key+',';
        var obj2 = obj[key];
         for(var key2 in obj2){
           str = str+obj2[key2]+'\t';
         }
      }
   }
   stream.write(replaceAll(str,'.',decChar) + "\n");
  });
  stream.end();
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

// push subscribe push notification via autobahn 
function plnxPush() {
  console.log('### push ticker');
  // plnx.push(function(session) {
  //   // USDT_BTC ticker trollbox
  //   console.log('### subscribe ticker');
  //   session.subscribe("ticker", function(data){
  //     console.log('push data=',data);
  //   });
  // });

  var autobahn = require('autobahn');
  var wsuri = "wss://api.poloniex.com";
  var connection = new autobahn.Connection({url: wsuri,realm: "realm1"});

  connection.onopen = function (session) {
    console.log('### Websocket connection open');
    wssession = session;

    wssession.subscribe('BTC_XMR', marketEvent);
    wssession.subscribe('ticker', tickerEvent);
    wssession.subscribe('trollbox', trollboxEvent);
  };

  connection.open();

  connection.onclose = function () {
    console.log("### Websocket connection closed");
  };
  
}

function marketEvent (args,kwargs) {
  console.log('marketEvent ',args);
}
function tickerEvent (args,kwargs) {
  console.log('tickerEvent ', args);
}
function trollboxEvent (args,kwargs) {
  console.log('trollboxEvent ', args);
}