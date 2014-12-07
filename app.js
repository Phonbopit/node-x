var express = require('express');
var app = express();

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');


app.get('/', function(req, res) {
	console.log(__dirname);
	res.render('default', {
		title: 'This is default route'
	});
});

app.get('/me', function(req, res) {
	res.send('Chai');
});

app.get('*', function(req, res) {
	res.send("Bad Route! :(");
});

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});


module.exports = app;