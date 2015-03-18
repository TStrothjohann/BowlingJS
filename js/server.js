var server = require('express')();
var http = require('http').createServer(server);

server.set('views', __dirname + '/views');

server.get('/', function(request, response) {
  response.render('index')
});


http.listen(3000, function(){
  console.log('Listening on port 3000');
});
