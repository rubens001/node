const path = require('path');
const sqlite3 = require('sqlite3').verbose();
 
// o arquivo cotas.db deve existir o node na cria o arquivo

const dbPath = path.resolve(__dirname, 'cotas.db');

console.log('dbPath=', dbPath);

// open the database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Connected to the database.');
  });
 
// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
