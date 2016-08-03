// http://www.lalit.org/wordpress/wp-content/uploads/2008/05/fontdetect.js?ver=0.3

let baseFonts = ['monospace', 'sans-serif', 'serif']
let size = '72px'
let testString = 'mmmmmmmmmmlli'
let firstBodyEl = document.getElementByTagName('body')[0]

let span = document.createElement('span')
span.style.fontSize = size
span.textContent = 'mmmmmmmmmmlli'

let defaultWidth = {}
let defaultHeight = {}

for (let font of baseFonts) {
  span.style.fontFamily = font
  firstBodyEl.appendChild(span)
  defaultWidth[font] = span.offsetWidth
  defaultHeight[font] = span.offsetHeight
  firstBodyEl.removeChild(span)
}


let detectedFonts = ''

for (let font of fontDictionary) {
  let detected = false
  for (let baseFont of baseFonts) {
    span.style.fontFamily = font + ',' + baseFont
    firstBodyEl.appendChild(span)
    let fontInstalled = (
        span.offsetWidth !== defaultWidth[baseFont] ||
        span.offsetHeight != defaultHeight[baseFont]
    )
    detected = detected || fontInstalled
  }
  if (detected) {
    detectedFonts += font
  }
}

let fingerprint = md5(detectedFonts)
