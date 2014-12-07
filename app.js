var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
	res.send('<h1>Hello Express.js</h1>');
});

app.get('/me', function(req, res) {
	res.send('Chai');
});

app.get('/who/:name', function(req, res) {
	var name = req.params.name;
	res.send('<h1>Hello xxxxx</h1> ' + name);
});

app.get('*', function(req, res) {
	res.send("ASFSDFSDFDF");
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});
