var express = require('express');
var fs = require('fs')
var https = require('https')
var app = express();
var path = require('path');

// viewed at http://localhost:8000
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

https.createServer({
  key: fs.readFileSync(__dirname + '/48871598_192.168.1.28000.key'),
  cert: fs.readFileSync(__dirname + '/48871598_192.168.1.28000.cert')
}, app)
.listen(8000, function () {
  console.log('Example app listening on port 8000! Go to https://localhost:8000/')
})