var mongoose = require('mongoose');
var user = mongoose.model('user');

module.exports = 
{
	show: function(req, res)
	{
		user.findOne({_id: req.session.user_id}, function(err, result)
		{
			if(err)
			{
				console.log(err);
			}
			else
			{	
				var info = {name: result.name,
							email: result.email,
							city: result.city,
							vouches: result.vouches};
				res.json(info);			
				

			}
		})
	},
	update: function(req, res)
	{
		console.log(req.body);
		user.update({_id: req.session.user_id}, {$set: {name: req.body.name, city: req.body.city, description: req.body.description}}, function(err, user)
		{
			if(err)
			{
				console.log(err);
			}
			else
			{
				res.json({success: "Information Successfully Updated"});
			}
		})
	},
	get: function(req, res)
	{
		user.find({}, function(err, users)
		{
			if(err)
			{
				console.log(err);
			}
			else
			{
				res.json(users);
			}
		})
	}
}