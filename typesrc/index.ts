#!/usr/bin/env node
import { style } from 'typestyle';
import { MyClass } from './src/my-class';

import { Server } from './src/app';

//module dependencies.
// var app = require("./src/app");

let server : Server = Server.bootstrap();
// app.Server.bootstrap();

console.log('### server started port : ', server.app.port);