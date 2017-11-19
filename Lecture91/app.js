var express = require("express");
var app = express();
var mongoose = require("mongoose");
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');
var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

// DB connection
mongoose.connect('mongodb://localhost/lecture91', { useMongoClient: true });
setupController(app);
apiController(app);

app.listen(port);

console.log('Welcome! we are login to port ' + port);