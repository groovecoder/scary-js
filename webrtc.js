var md5 = require('md5')

let connection = new RTCPeerConnection()
let localIPs = ''
let fingerprint = ''

connection.onicecandidate = (iceCandidate) => {
  if (iceCandidate.candidate) {
    let candidateString = iceCandidate.candidate.candidate
    console.log(candidateString)
    let ipMatch = candidateString.match(/candidate\:\d \d UDP \d{10} ([0-9a-f:.]+)/)
    if (ipMatch !== null) {
      localIPs += ipMatch[1]
    }
    fingerprint = md5(localIPs)
  }
}

connection.createDataChannel('')

connection.createOffer().then((rtcSession) => {
  connection.setLocalDescription(rtcSession)
})
