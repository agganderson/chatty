var groups = require('./../controllers/groups.js');

module.exports = function(app){
	app.get('/groups', function(req, res){
		groups.index(req, res);
	});

	app.post('/groups', function(req, res){
		console.log('got to post groups route');
		groups.create(req, res);
	});

	app.post('/group', function(req, res){
		console.log('finding group route here');
		groups.check(req, res);
	});
}