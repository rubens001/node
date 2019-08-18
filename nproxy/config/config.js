const low = require('lowdb');

module.exports = {
    localPort: 1337,
    remotePort: 443,
    remoteHost: 'hqhmlsvc.santanderbr.pre.corp',
    webserverPort: 7777,
    localProtocol: 'https',
    remoteProtocol: 'https',
    db: low('app/db/db.json', { storage: require('lowdb/lib/storages/file-async') })
};
// declarado db aqui para ser uma unica instancia
// remotePort: 9080,
// remotePort: 9443,