
# Ref shortcuts : https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf
# find file : CTRL+P

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