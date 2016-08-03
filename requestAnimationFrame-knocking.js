let visitedUrls = []
let unVisitedUrl = 'unvisited' + Math.random().toString().substring(2) + '.com'
let currentUrl = ''
let lastTime = 0
let checkingUrl = false

function loop(timeStamp) {
  let delay = timeStamp - lastTime
  // More than 50ms identifies a re-draw event
  if (checkingUrl && delay >= 50) {
    visitedUrls.push(currentUrl)
  }
  console.log(delay + ‘ ms’)
  lastTime = timeStamp
  requestAnimationFrame(loop)
}

requestAnimationFrame(loop)

let links = []
for (let count=0; count < 50; count++) {
  let link = document.createElement('a')
  link.setAttribute('href', unVisitedUrl)
  link.setAttribute('style', 'text-shadow: 0 0 50px')
}






for (url of urlDictionary) {
  checkingUrl = true
  currentUrl = url
  for (link of links) {
    link.href = url
    // Chrome requires a "touch" on the style attribute
    // to trigger a re-draw
    link.style.color = 'red'
    link.style.color = ''
  }
  checkingUrl = false
  // Reset back to un-visited URL color
  for (link of links) {
    link.href = unVisitedUrl
  }
}






















