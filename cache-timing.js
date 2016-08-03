let visitedHosts = []

function onImgLoad(startTime, host) {
  let elapsedTime = new Date().getTime() - startTime
  if (elapsedTime <= 50) {
    visitedHosts.push(host.name)
  }
}

for (host of hostsArray) {
  let img = new Image()
  img.onload = onImgLoad(new Date().getTime(), host)
  img.src = host.imgSrc
}




