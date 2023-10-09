// create web server
var express = require('express');
var app = express();

// create a route
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// create another route
app.get('/comments', function(req, res) {
    res.send('Hello World! Comments');
});

// start the server
app.listen(8000, function() {
    console.log('Server started on port 8000');
});