var csv = require('ya-csv');
var reader = csv.createCsvFileReader('/etc/passwd', {
    'separator': ':',
    'quote': '"',
    'escape': '"',
    'comment': '#',
});
var writer = new csv.CsvWriter(process.stdout);
reader.addListener('data', function(data) {
    writer.writeRecord(data);
});
