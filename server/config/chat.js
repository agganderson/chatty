var users = [];
var messages = [];

module.exports = function Route(app, server){
	var io = require('socket.io').listen(server)
	io.sockets.on('connection', function(socket){
		console.log('socket is on');
		socket.on('create_user', function(data){
			if(active_users[data.username] === undefined){
				active_users[data.username] = socket.id;
				socket.emit('send_all', {history:chat_log});
			}
			else{
				socket.emit('failed_name', {error:'That name is taken'});
			}
		});

		socket.on('send_message', function(data){
			chat_log += data.message;
			socket.broadcast.emit('send_message', {new_message:data.message});
			console.log(data);
		});

		socket.on('disconnect', function(){
			console.log(socket.id + ' has disconnected');
		});
	});
}