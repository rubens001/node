#!/bin/env node
'use strict'
var express = require('express');
var fs      = require('fs');
var config = require('./app/config').get();
var session = require('./app/session');
var bodyParser = require('body-parser'); // para receber json num post

var plnx = require('plnx');

// create application/json parser
var jsonParser = bodyParser.json();
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

/**
 *  Define the sample application.
 */
var SampleApp = function() {

    //  Scope.
    var self = this;


    /*  ================================================================  */
    /*  Helper functions.                                                 */
    /*  ================================================================  */

    /**
     *  Set up server variables/defaults.
     */
    self.setupVariables = function() {
        //  Set the environment variables we need.
        self.dbPath = config.dbPath;
        self.ipaddress = "127.0.0.1";
        self.port = config.port;
        console.warn('### dbPath:'+self.dbPath);
    };


    /**
     *  Populate the cache.
     */
    self.populateCache = function() {
        if (typeof self.zcache === "undefined") {
            self.zcache = { 'index.html': '' };
        }

        //  Local cache for static content.
        self.zcache['index.html'] = fs.readFileSync('./index.html');
    };


    /**
     *  Retrieve entry (content) from cache.
     *  @param {string} key  Key identifying content to retrieve from cache.
     */
    self.cache_get = function(key) { return self.zcache[key]; };


    /**
     *  terminator === the termination handler
     *  Terminate server on receipt of the specified signal.
     *  @param {string} sig  Signal to terminate on.
     */
    self.terminator = function(sig){
        if (typeof sig === "string") {
           console.log('%s: Received %s - terminating sample app ...',
                       Date(Date.now()), sig);
           process.exit(1);
        }
        console.log('%s: Node server stopped.', Date(Date.now()) );
    };


    /**
     *  Setup termination handlers (for exit and a list of signals).
     */
    self.setupTerminationHandlers = function(){
        //  Process on exit and signals.
        process.on('exit', function() { self.terminator(); });

        // Removed 'SIGPIPE' from the list - bugz 852598.
        ['SIGHUP', 'SIGINT', 'SIGQUIT', 'SIGILL', 'SIGTRAP', 'SIGABRT',
         'SIGBUS', 'SIGFPE', 'SIGUSR1', 'SIGSEGV', 'SIGUSR2', 'SIGTERM'
        ].forEach(function(element, index, array) {
            process.on(element, function() { self.terminator(element); });
        });
    };

    /*  ================================================================  */
    /*  App server functions (main app logic here).                       */
    /*  ================================================================  */

    var callService = function(req,res,next,method) {
      // evita 304 para servicos
      req.headers['if-none-match'] = 'no-match-for-this';
      var serviceName = req.params.service;
      var service;
      try {
        service=require('./service/'+serviceName);
      } catch (err) {
        console.error('### ERROR ',err);
        res.status(404).send('Not found');
        return;
      }
      if(!service[method]) {
        res.status(501).send('Not implemented');
        return;
      }
      service[method](req,res,next);
    }

    /**
     *  Create the routing table entries + handlers for the application.
     */
    self.createRoutes = function() {
      self.app.get('/', function (req, res) {
        res.setHeader('Content-Type', 'text/html');
        res.send(self.cache_get('index.html') );
      });

      // servicos particulares
      self.app.get('/asciimo', function (req, res) {
        var link = "http://i.imgur.com/kmbjB.png";
        res.send("<html><body><img src='" + link + "'></body></html>");
      });
      self.app.get('/api/test/*', function (req, res, next) {
        require('./service/test').get(req,res,next);
      });
      self.app.post('/api/test/:radioId',jsonParser, function (req, res, next) {
        require('./service/test').post(req,res,next);
      });

      // servicos genericos (convencao padrao "/api/nomeservico")
      self.app.get('/api/:service', function (req, res, next) {
        callService(req, res, next,'get');
      });
      self.app.get('/api/:service/find', function (req, res, next) {
        callService(req, res, next,'find');
      });
      self.app.get('/api/:service/*', function (req, res, next) {
        callService(req, res, next,'get');
      });
      self.app.post('/api/:service',jsonParser, function (req, res, next) {
        callService(req, res, next,'post');
      });
      self.app.post('/api/:service/*',jsonParser, function (req, res, next) {
        callService(req, res, next,'post');
      });
    };


    /**
     *  Initialize the server (express) and create the routes and register
     *  the handlers.
     */
    self.initializeServer = function() {
        // self.app = express.createServer();
        self.app = express();
        
//		acho que mudou
//      self.app.use(express.bodyParser());

        self.app.use(bodyParser.json());

        self.app.use(function (req, res, next) {
          session.init(req,res,next);
          //next();
        });
        self.createRoutes();

        //  Add handlers for the app (from the routes).
        for (var r in self.routes) {
            self.app.get(r, self.routes[r]);
        }
    };


    /**
     *  Initializes the sample application.
     */
    self.initialize = function() {
        self.setupVariables();
        self.populateCache();
        self.setupTerminationHandlers();

        // Create the express server and routes.
        self.initializeServer();
    };


    /**
     *  Start the server (starts up the sample application).
     */
    self.start = function() {
        // static resources
        self.app.use(express.static(config.pathResource));

        //  Start the app on the specific interface (and port).
        self.app.listen(self.port, self.ipaddress, function() {
            console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), self.ipaddress, self.port);
        });
    };

};   /*  Sample Application.  */



/**
 *  main():  Main code.
 */
var zapp = new SampleApp();

zapp.initialize();
zapp.start();

// Initialize MongoDB
//var db = require('./app/db');
//db.initialize(function(err,database){
//  if (!err) {
//    zapp.initialize();
//    zapp.start();
    // setInterval(function(){ cronPostRadio(); }, 120000); // 120000 = 2min
//  }
//});

function cronPostRadio() {
  var radioService=require('./service/radio');
  var res={json:function(body){
    //console.log(body);
  }};
  var req={params:'89'};
  radioService.post(req,res);
}
