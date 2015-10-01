var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');

var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	password: String,
	city: String,
	vouches: {up: Number, down: Number},
	description: String,
	img: {data: Buffer, contentType: String} // decide weather to save image in the database or folder
});

userSchema.path('email').validate(function (email) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return (emailRegex.test(email));
}, 'Please enter a correct Email.');

mongoose.model('user', userSchema);