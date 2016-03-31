var mongoose = require('mongoose');
var GroupChat = mongoose.model('GroupChat');

module.exports = (function(){
	return {
		index: function(req, res){
			GroupChat.find({}, function(err, results){
				if(err){
					console.log('Did not get groups');
				}
				else {
					// console.log("Got 'em and in routes.js");
					res.json(results);
				}
			});
		},
		create: function(req, res){
			var newGroup = new GroupChat({title: req.body.title});
			newGroup.save(function(err, results){
				if(err){
					var error = err.errors.title.message;
					res.json({error});
					console.log(error);
					console.log('Could not create that new group');
				}
				else {
					//console.log('SAVED and in routes.js');
					res.json(results);
				}
			});
		}, 
		check: function(req, res){
			GroupChat.findOne({title: req.body.title}, function(err, results){
				if(err){
					console.log('Did not find that group');
					res.json({error: "Group not established, make a group"});
				}
				else {
					console.log('found the group', results);
					if(results == null){
						res.json({error: 'Group not established, make a new group'});
					}
					else{
						res.json(results);						
					}
				}
			});
		}
	}
})();