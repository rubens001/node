// carrega (restaura) pouchDB-server com conteudo dos diversos DBs locais
// USO : $ DIR=/home/rubens/Documents/projetos/node/util/backup node pload.js

var fs = require('fs');
var PouchDB = require('pouchdb');

var remoteURL = process.env.URL || 'http://localhost:5984';
var path = process.env.DIR || __dirname + '/backup';

var dbs;

if (!fs.existsSync(path)){
    console.error('diretorio nao existe, dir='+path);
} else {
	processDir();
}

function processDir() {
	console.log('process dir='+path);
	dbs = getDirs(path);
	loadDBs();
}

/** Obtem dirs 1o. nivel */
function getDirs(path, dirArr){
	if (!dirArr) {
		dirArr=[];
	}
	var files = fs.readdirSync(path);
	for (var i in files){
		var name = path + '/' + files[i];
		if (fs.statSync(name).isDirectory()){
			dirArr.push(files[i]);
		}
	}
	return dirArr;
}


function processDB(idb) {
	console.log('db name='+dbs[idb]);
	var remoteDB = new PouchDB(remoteURL + '/' + dbs[idb]);
	var localDB = new PouchDB(path + '/' + dbs[idb]);
	remoteDB.replicate.from(localDB).on('complete', function () {
	  nextDB(idb);
	}).on('error', function (err) {
	  console.error('### replicate error', err);
	});

}

function loadDBs() {
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
