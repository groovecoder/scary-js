let express = require('express');
let app = express();

app.get('/', function(req, res) {
  res.set('Content-Security-Policy', 'img-src http:');
  res.send(200);
  return;
}




