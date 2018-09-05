//Load express module with `require` directive
var express = require('express')
var app = express()

var http = require('http');
var fs = require('fs');

var file = fs.createWriteStream("file.jpg");
var request = http.get("http://i3.ytimg.com/vi/J---aiyznGQ/mqdefault.jpg", function(response) {
  response.pipe(file);
});


//Define request response in root URL (/)
app.get('/', function (req, res) {
  res.sendFile(__dirname + "/dockertext.html");
})

//Launch listening server on port 8081
app.listen(8081, function () {
  console.log('app listening on port 8081!')
})

