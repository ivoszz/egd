var express = require('express');
var request = require('request');

var base = 'http://www.europeangodatabase.eu';

var app = express();

app.configure(function() {
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler());
})

app.get('/admin', function(req, res) {
  res.send('<h1>EGD Proxy Administration</h1>')
});

app.get('/EGD/GetPlayerDataByPIN.php', function(req, res) {
  request.get(base + req.url).pipe(res);
});

app.get('/EGD/GetPlayerDataByData.php', function(req, res) {
  request.get(base + req.url).pipe(res);
});

app.listen(8080);

console.log('Started...');
