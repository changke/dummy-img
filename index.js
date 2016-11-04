var express = require('express');
var svg = require('./repo/svg');

var app = express();

app.get('/', function(req, res) {
  res.send('dummy-img 1.0. URL pattern: "/img/640/400"');
});

app.get('/img/:width/:height', function(req, res) {
  var w = req.params.width;
  var h = req.params.height;
  svg.init(w, h);
  res.set('Content-Type', 'image/svg+xml');
  res.send(svg.generate());
});

app.listen(3030, function() {
  console.log('App is listening on port 3030...');
});
