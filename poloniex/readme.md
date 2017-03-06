
# Ref shortcuts : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
# find file : CTRL+P
 
# ex publics : 
https://poloniex.com/public?command=returnTicker
https://poloniex.com/public?command=return24hVolume
https://poloniex.com/public?command=returnTradeHistory&currencyPair=BTC_NXT&start=1410158341&end=1410499372

https://public.poloniex.com/?command=returnTradeHistory&currencyPair=USDT_BTC

candle 5min
https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=1488679800&end=9999999999&period=300

candle 15min
https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=1485892800&end=9999999999&period=900

var d = new Date(2014,08,12); console.log(d.getTime());
result : 1410490800000
as datas informadas são getTime() / 1000

# OBS
somente olhando resposta do ticker ja da pra escolher uma moeda que varia bastante por dia

# transformar csv
cd /home/rubens/Documents/dbjson
cp trades.csv trades2.csv
sed -i -e 's/,/;/g' trades2.csv 
sed -i -e 's/[.]/,/g' trades2.csv

# exemplos shell

'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// Add a post
db.get('posts')
    .push({msg:'teste msg'})
    .last()
    .assign({ id: Date.now() })
    .write()
    .then(post => showReturn(null,post));
}

# write
'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// Add a post
db.get('posts')
    .push({id:123, msg:'teste msg'})
    .last()
    .write()
    .then(post => showReturn(null,post));
}

# find 1
'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// find a post
var resp = db.get('posts').find({ id: 123 }).value();
showReturn(null,resp);
}

# retornar tudo
'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// find a post
var resp = db.get('posts').value();
showReturn(null,resp);
}

# tentando find com criterio (so retornou 1)
'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// find a post
var resp = db.get('posts').find(function (o) { return o.id > 1;}).value();
showReturn(null,resp);
}

# map - retorna null na collection quando nao obedece o criterio
'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// find a post
var resp = db.get('posts').map(function (o) { if (o.id > 1) {return o};}).value();
showReturn(null,resp);
}

# filter
'use strict'
var db = require('./app/db').get();

exports.execute=function(showReturn) {
// find a post
var resp = db.get('posts').filter(function (o) { if (o.id > 124) {return o};}).value();
showReturn(null,resp);
}