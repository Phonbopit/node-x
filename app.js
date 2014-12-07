var express = require('express');
var app = express();
var routes = require('./routes');

app.set('view engine', 'ejs');
//app.set('views', __dirname + '/views');

app.locals.localTitle = 'Node-x';

app.get('/', routes.index);
app.get('/me', routes.me);
app.get('*', routes.badRoute);

var server = app.listen(3000, function() {
	console.log('Listening on port 3000');
});


module.exports = app;