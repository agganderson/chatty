var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
app.use(bodyParser.json());

require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app);
var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.use(express.static(path.join(__dirname, './client')));

var server = app.listen(8000, function(){
	console.log('Listening to Chatty on port 8000');
});

var Route = require('./server/config/chat.js');
Route(app, server);