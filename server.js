var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var busboy = require('connect-busboy');

app.use(busboy());
app.use(bodyParser.json());
// app.use(bodyParser({uploadDir: path.join(__dirname + '/clients/profile_pictures')}));
app.use(session({secret: 'Iliketomoveit'}));
app.use(express.static(path.join(__dirname + '/clients')));
require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);
app.listen(6789, function(){
	console.log('running');
})