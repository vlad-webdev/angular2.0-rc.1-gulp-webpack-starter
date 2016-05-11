///<reference path="./../../node_modules/angular2-in-memory-web-api/typings/browser.d.ts"/>
//<reference path="./_all.d.ts"/>

import 'es6-shim';
// import 'jquery';
// import 'bootstrap';
import 'reflect-metadata';
require('zone.js');

import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppCmp} from "./components/app";

bootstrap(AppCmp);
