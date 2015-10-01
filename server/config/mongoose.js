var mongoose= require('mongoose');
var fs  = require('fs');

mongoose.connect('mongodb://localhost/Travel');

require('./../models/user.js');