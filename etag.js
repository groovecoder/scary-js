function etagCookie(name, value) {
  let xhr = new XMLHttpRequest();
  if (value !== undefined) {
    document.cookie = name + '=' + value + ';'
      + 'path=/;'
      + 'domain=' + getHost();
    xhr.send('/etagCookie?name=' + name);
  } else {
    xhr.onLoad = function (response) {
      value = response.data;
      document.cookie = name + '=' + response.data + ';'
        + 'path=/;'
        + 'domain=' + getHost();
    }
    xhr.send('/etagCookie?name=' + name);
    return value;
}



let express = require('express');
let app = express();

app.get('/etagCookie', function(req, res) {
  cookieValue = req.cookies[req.query.name];
  if (!cookieValue) {
    cookieValue = req.get('If-None-Match');
  }
  if (cookieValue) {
    res.set('Etag', cookieValue);
    res.send(cookieValue);
    return;
  }
  res.send(304);
  return;
}



