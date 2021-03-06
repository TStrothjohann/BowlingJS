var express = require('express');
var server = express();
var http = require('http').Server(server);

server.set('view engine', 'ejs');
server.use(express.static(__dirname + '/public'));
server.use(express.static(__dirname + '/bower_components'));

server.get('/', function(request, response){
  response.render('index');
});

var port = process.env.PORT || 3000;

http.listen(port, function(){
  console.log("Listening on port " + port);
});

module.exports = http;
