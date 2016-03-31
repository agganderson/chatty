var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var io = require('socket.io');
app.use(bodyParser.json());

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);

app.use(express.static(path.join(__dirname, './client')));

app.listen(8000, function(){
	console.log('Listening to port 8000 for Chatty Project');
})