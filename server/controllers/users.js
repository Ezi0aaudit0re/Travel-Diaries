var mongoose = require('mongoose');
var user = mongoose.model('user');
module.exports = 
{
	add: function(req, res)
	{
		console.log('coming to backend add function', req.body)
		var date =  new Date() - new Date(req.body.age) ;
		var current_date = new Date();
		if(req.body.password.length > 6 && req.body.password === req.body.confirm_password && date > 568025000000 )
		{
			user.find({email: req.body.email}, function(err, result)
			{
				if(result.length > 0 )
				{
					console.log('user already exists', result);
					res.json({error: "user already exists" });
				}
				else
				{
					user.create({name: req.body.name, email: req.body.email, password: req.body.password, city: req.body.city}, function(err)
					{
						if(err)
						{
							res.json({error: err.errors.email.message});
						}
						else
						{
							console.log('user created');
							res.json({success: "User succesfully registered. Please Login to view something awesome"});
						}
					});
				}
			})
			
		}
		else
		{
			res.json({error: "Password must be 6 characters long and match the confirm password field and you should be 18 years old"});
		}
	},
	login: function(req, res)
	{
		console.log(req.body);
		user.find({email: req.body.username, password: req.body.password}, function(err, user)
		{
			if(user.length > 0)
			{
				req.session.user_id = user[0]._id;
				console.log(req.session.user_id);
				res.json(true);
				
			}
			else
			{
				res.json({error: "User doesnot exist"});
			}
		});
	}
}