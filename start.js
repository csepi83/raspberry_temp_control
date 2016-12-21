// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api


var express = require('express')
var app = express();

var NodeFileParser = require('node-file-parser');


var path = require('path');
var exec = require('child_process').exec;

var Converter = require("csvtojson").Converter;
var converter = new Converter({});

app.get('/control', function(req, res) {
  if (req.query.type == 'on') {
    exec('gpio mode 0 out');
  } else {
    exec('gpio mode 0 in');
  }
  res.end()
});

app.get('/status', function(req, res) {
  exec('gpio readall|grep "GPIO. 0"|cut -c27-29', function (error, stdout, stderr) {
    res.end(stdout);
  });
});

app.get('/data', function(req, res) {
  var loader = require('csv-load-sync');
  var csv = loader('data.csv');

  var data = [];
  for (var value of csv) {
    data.push({date:value.ts,t:value.t});
  }
  res.send(data);
  res.end();

})

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(8000, function () {
  console.log('Temp Control app listening on port 8000!')
  return;
})
