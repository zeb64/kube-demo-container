var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Version 1: Hello World!');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Exemple application en ecoute sur  http://%s:%s', host, port);
});
