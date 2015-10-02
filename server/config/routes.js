var mongoose = require('mongoose');
var user = require('./../controllers/users.js');
var profile = require('./../controllers/profiles.js')
var fs = require('fs');
module.exports = function(app)
{
	app.get('/', function(req, res){
		res.render('Login&registration')
	});
	app.get('/profile', function(req, res)
	{
		console.log("id in controllers ", req.session.user_id)
		if(req.session.user_id)
		{
			res.render('Profiles');
		}
		else
		{
			res.redirect('/');
		}
		
	})
	app.post('/addUser', function(req, res){
		user.add(req, res);
	});
	app.post('/login', function(req, res)
	{
		user.login(req, res);
		console.log('returned in routes');
	});	 
	// app.get('/main', function(req, res){
	// 	if(req.session.id)
	// 	{
	// 		console.log(req.session.id)
	// 		console.log('here in the routes');
	// 		res.render('/Users/amannagpal/desktop/antz project/Locals-Travelers/views/main');
	// 	}
	// 	else
	// 	{
	// 		res.redirect('/');
	// 	}
		
	// });
	app.get('/profile', function(req, res){
		if(req.session.user_id != undefined)
		{
			profile.show(req, res);
		}
	});
	app.post('/editInfo', function(req, res)
	{
		if(req.session.user_id != undefined){
			profile.update(req, res);
		}
	});
	app.get('/getUsers', function(req, res)
	{
		if(req.session.user_id != undefined)
		{
			profile.get(req, res);
		}
	})

	
	
}