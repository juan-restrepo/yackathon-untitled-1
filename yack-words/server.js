'use strict';
var path       = require('path');
var express    = require('express');

var host = '0.0.0.0';
var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function() {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

console.log('listening on port ' + port);
app.listen(port, host);
