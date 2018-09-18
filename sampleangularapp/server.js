var express = require('express');
var app = express();
// app.use(express.static(__dirname + '/sampleangularapp'));
app.use(express.static(__dirname + '/dist/sampleangularapp'));

app.get('/', function (req, res) {
    // res.sendFile(__dirname + '/sampleangularapp/index.html');
    res.sendFile(__dirname + '/dist/sampleangularapp/index.html');
});

app.get('/api', function (req, res) {
    res.send(__dirname);
});

var port = process.env.PORT || 80;
var server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});