// Learn about API authentication here: https://plot.ly/nodejs/getting-started
// Find your api_key here: https://plot.ly/settings/api


var express = require('express')
var app = express();
var path = require('path');

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

