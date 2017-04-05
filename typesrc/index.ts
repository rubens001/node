#!/usr/bin/env node
import { style } from 'typestyle';
import { MyClass } from './src/my-class';
import { Server } from './src/app';

//module dependencies.
var app = require("./src/app");
var debug = require("debug")("express:server");
var http = require("http");

let server : Server = Server.bootstrap();