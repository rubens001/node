const path = require('path');
const sqlite3 = require('sqlite3').verbose();
 
// open database in memory
// let db = new sqlite3.Database(':memory:', (err) => { ...

const dbPath = path.resolve(__dirname, 'cotas.db');

console.log('dbPath=', dbPath);

// open the database
let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Connected to the database.');
  });

db.run('CREATE TABLE IF NOT EXISTS langs(name text)', err => {
    if (err && err['errno'] && err['errno'] === 1) {
        console.log('tabela existe');
    } 
    if (err) {
        console.error('ERROR create table', err);
    }
});

let languages = ['C++', 'Python', 'Java', 'C#', 'Go'];
// construct the insert statement with multiple placeholders
// based on the number of rows
let placeholders = languages.map((language) => '(?)').join(',');
let sql = 'INSERT INTO langs(name) VALUES ' + placeholders;

console.log('placeholders=', placeholders);
console.log('sql=', sql);

  /*
db.run(sql, languages, err => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Rows inserted');
  }); 


db.get('select * from langs', (err, row) => {
    console.log('err=', err, 'row=', row);
}); **/

console.log('query 1');
db.all('select * from langs where name in (?,?)', ['Go','C++'], (err, row) => {
    console.log('err=', err, 'row=', row);
});

/*
console.log('query 2');
db.all('select * from langs', (err, row) => {
    console.log('err=', err, 'row=', row);
});


db.run('delete from langs where name = ?', ['Python'], (err) => {
    console.log('delete err=', err);
});

db.all('select * from langs', (err, row) => {
    console.log('err=', err, 'row=', row);
}); */


// close the database connection
db.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Close the database connection.');
});
