let visitedColor = '#123456'
let visitedUrls = []

function getLinkColor(link) {
  return document.defaultView.getComputedStyle(link, null).getPropertyValue('color'));
}

function hasVisited(url) {
  let link = document.createElement('a').setAttribute('href', url)
  return getLinkColor(link) == visitedColor
}

document.createElement('a').setAttribute('id', 'visited-link')
document.createElement('style').styleSheet.innerHTML = '#visited-link:visited{color:' + visitedColor + '}'

for (url of urlDictionary) {
  if hasVisited(url) {
    visitedUrls.push(url)
  }
}



