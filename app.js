//
// Server entry point
//

'use strict';

// Load external dependencies
var express = require('express');
var swig    = require('swig');
var app     = express();

// Load app dependencies
var config       = require('./config.json');
var gruntWatcher = require('./app/grunt-watcher');
var redirects    = require('./app/middleware/redirects');
var reqVariables = require('./app/middleware/req-variables');
var controllers  = require('./app/controllers');

// Start Grunt watcher, for Sass & Autoprefixer
gruntWatcher();

// App & view configuration
global.__uptime  = Date.now();
swig.setDefaults({cache: false});
app.engine('.html', swig.renderFile);
app.engine('.js', swig.renderFile);
app.set('views', __dirname + '/src/');
app.set('view engine', 'html');
app.disable('view cache');

// Set middleware
app.use(express.compress());
app.use(redirects);
app.use(reqVariables);

// Set controllers
app.get('/static/img/*.svg.*.png', controllers.svg2png);
app.get('/static/js/*.js', controllers.concatJS);
app.get('/static/*', controllers.static);
app.use(express.favicon('src/static/img/icon/favicon.ico'));
app.use(controllers.views);
app.use(controllers.page404);

// Start server
app.listen(config.server.port);
console.log('Listening on port ' + config.server.port);
console.log('Use Ctrl+C or SIGINT to exit.');
