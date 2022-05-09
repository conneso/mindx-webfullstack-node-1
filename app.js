var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('Hello World. My name is John Doe!');
});

app.get('/cats', function(req, res) {
    res.send(['Cat1', 'Cat2']);
});

app.post('/', function(req, res) {
    res.send('Đây là kết quả của POST method');
});
var server = app.listen(8000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Server running at http://%s:%s', host, port);
});