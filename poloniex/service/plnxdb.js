var db = require('../app/db').get();
var config = require('../app/config').get();
var session=require('../app/session');
var plnx = require('plnx');
var fs = require('fs');
var request = require('request');

var plnxInterval;
var wssession;
var last_USDT_BTC=0;
var requestDate;
var tickCount=0;

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
  console.log('### startPlnxTicker');
  plnxInterval = setInterval(function(){
    requestDate = new Date().toISOString();
    tickCount++;
    plnx.returnTicker(tickerCB); }, 1000);
}

// stop interval
function stopPlnxTicker() {
  console.log('### stopPlnxTicker');
  clearInterval(plnxInterval);
}

// grava lowdb / mongodb
function tickerCB(err,data) {
	if (err) { console.error('tickerCB err=',err); return; }
  
  var data2 = {date:requestDate,tickCount:tickCount};
  data2.USDT_BTC = data.USDT_BTC;
  // data2.USDT_LTC = data.USDT_LTC;
  if (last_USDT_BTC != data.USDT_BTC.last) {
    last_USDT_BTC = data.USDT_BTC.last;

    // LowDB
    if (config.writeLow) {
      db.get('trades').push(data2).last().write();
    }
    
    // MongoDB
    // POST mUri + '/collections/trades' + '?apiKey=' + config.apiKey
    var options = {
      uri: config.mUri + '/collections/trades' + '?apiKey=' + config.apiKey,
      method: 'POST',
      json: data2
    };
    if (config.writeMongo) {
      request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          // console.log(body.id) // Print the shortened url.
        } else {
          console.error('ERROR post mongolab, err=',error);
        }
      });
    }

  }

  // exclui lanctos a mais de 4 horas
  var d = new Date();
  d.setHours(d.getHours() - 4);
  var dts = d.toISOString();
  db.get('trades').remove(function(o){if (o.date < dts) return o;}).write();
}

// TODO: Obter "Documents" do user e colocar em config :-)
// cria csv com conteudo de lowdb
function plnxCsv() {
  const decChar = ',';
  console.log('### csv : ' + config.homePath + '/Documents/dbjson/trades.csv');
  var stream = fs.createWriteStream(config.homePath + '/Documents/dbjson/trades.csv');
  stream.write("date\ttickCount\tid\tlast USDT_BTC\tlowestAsk\thighestBid\tpercentChange\tbaseVolume\tquoteVolume\tisFrozen\thigh24hr\tlow24hr\t\n");
  db.get('trades').value().forEach(function (obj) {
    var dtRegional = obj.date.replace('T',' ');
    dtRegional = dtRegional.replace('Z','');
    var str = dtRegional + '\t' + obj.tickCount + '\t';
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
  onsole.log('### csv : finished');
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