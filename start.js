// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api

var sensor = require('node-dht-sensor');
var current_temperature;

var express = require('express')
var app = express();

var NodeFileParser = require('node-file-parser');

<<<<<<< Updated upstream
var minutes = 0.1, the_interval = minutes * 60 * 1000;

setInterval(function () {
    console.log('second passed', new Date().getTime());
}, the_interval);
=======
var minutes = 0.1, interval = minutes * 60 * 1000;

setInterval(function () {
  sensor.read(11, 27, function(err, temperature, humidity) {
    if (!err) {
      current_temperature = temperature.toFixed(1)
    //  w.writeRecord([new Date().getTime() / 1000 | 0, temperature.toFixed(1), humidity.toFixed(1)]);
    }
  });
    console.log('second passed', new Date().getTime());
}, interval);
>>>>>>> Stashed changes

var path = require('path');
var exec = require('child_process').exec;

var Converter = require("csvtojson").Converter;
var converter = new Converter({});

var NoSQL = require('nosql');
var db = NoSQL.load('./data.nosql');

db.insert({name : 'Peter'});


db.find().make(function(filter) {
<<<<<<< Updated upstream
    filter.callback(function() {
=======
    filter.callback(function(err,response) {
>>>>>>> Stashed changes
        console.log(err, response);
    });
});


<<<<<<< Updated upstream
return;
=======
//return;
>>>>>>> Stashed changes
app.get('/control', function(req, res) {
  if (req.query.type == 'on') {
    exec('gpio mode 0 out');
  } else {
    exec('gpio mode 0 in');
  }
  res.end()
});

app.get('/temperature', function(req, res) {
  res.end(current_temperature);
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
