let visitedHosts = []

function onImgError(startTime, host) {
  let elapsedTime = new Date().getTime() - startTime
  if (elapsedTime <= 5) {
    visitedHosts.push(host)
  }
}

for (host of hstsHostsDictionary) {
  let img = new Image()
  img.onerror = onImgError(new Date().getTime(), host)
  img.src = host + '?' + Math.random().toString().substring(2)
}



