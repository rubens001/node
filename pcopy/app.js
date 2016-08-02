// USO : $ DIR=/home/rubens/Documents/projetos/pouch/pcopy/back node app.js

var fs = require('fs');
var PouchDB = require('pouchdb');
const request = require('request');

var remoteURL = process.env.URL || 'http://localhost:5984';
var path = process.env.DIR || __dirname + '/back';

var dbs;

if (!fs.existsSync(path)){
    fs.mkdirSync(path);
}

// obtem nomes DBs
request(remoteURL + '/_all_dbs', (error, response, body)=> {
  if (!error && response.statusCode === 200) {
    dbs = JSON.parse(body);
    backupDBs();
  } else {
    console.log("### _all_dbs error: ", error, ", status code: ", response.statusCode);
  }
});

function processDB(idb) {
	console.log('db name='+dbs[idb]);
	var remoteDB = new PouchDB(remoteURL + '/' + dbs[idb]);
	var localDB = new PouchDB(path + '/' + dbs[idb]);
	remoteDB.replicate.to(localDB).on('complete', function () {
	  nextDB(idb);
	}).on('error', function (err) {
	  console.error('### replicate error', err);
	});

}

function backupDBs() {
	var iDb=0;
	if (dbs.length === 0) {
		console.error('### dbs.length === 0');
		return;
	}
	processDB(0);
}

function nextDB(idb) {
	idb++;
	if (idb >= dbs.length) {
		return;
	}
	processDB(idb);
}

//var rs = fs.createReadStream('dump.txt');

// var localDB = new PouchDB('albums');

/*
remoteDB.replicate.to(localDB).on('complete', function () {
  console.log('### replicate ok');
}).on('error', function (err) {
  console.error('### replicate error', err);
});

localDB.info().then(function (info) {
  console.log(info);
});

localDB.allDocs({include_docs: true}).then(function (docs) {
  console.log('### docs',docs);
});
*/

/*
localDB.replicate.to(remoteDB).on('complete', function () {
  console.log('### replicate ok');
}).on('error', function (err) {
  console.error('### replicate error', err);
});
*/