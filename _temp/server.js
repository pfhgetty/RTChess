var server_port = process.env.PORT || 1337;
var verbose = false;
var http = require('http');
var express = require('express'),
  bodyparser = require('body-parser'),
  app = module.exports.app = express();
var server = http.createServer(app);


app.use(bodyparser.json()); // to support JSON-encoded bodies
app.use(bodyparser.urlencoded({ // to support URL-encoded bodies
  extended: true
}));

server.listen(server_port);
console.log("Listening on port " + server_port);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.get('/*', function(req, res, next) {

  //This is the current file they have requested
  var file = req.params[0];

  //For debugging, we can track what files are requested.
  if (verbose) console.log('\t :: Express :: file requested : ' + file);

  //Send the requesting client the file.
  res.sendFile(__dirname + '/' + file);

});

}
