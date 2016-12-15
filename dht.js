var sensor = require('node-dht-sensor');

var fs = require('fs');
var csv = require('ya-csv');

var dataFile = 'dht_data.csv';

sensor.read(11, 27, function(err, temperature, humidity) {
    if (!err) {

	var w = csv.createCsvFileWriter(dataFile,{'flags':'a'});

        w.writeRecord([new Date().getTime() / 1000 | 0, temperature.toFixed(1), humidity.toFixed(1)]);

    }
});
