var md5 = require('md5')

// Performs fingerprint as found in https://www.cdn-net.com/cc.js
let ccOutput = []
let audioCtx = new (window.AudioContext || window.webkitAudioContext)
let oscillator = audioCtx.createOscillator()
let analyser = audioCtx.createAnalyser()
let scriptProcessor = audioCtx.createScriptProcessor(4096, 1, 1)
let gain = audioCtx.createGain()

oscillator.type = 'triangle' // Set oscillator to output triangle wave
oscillator.connect(analyser) // Connect oscillator output to analyser input
analyser.connect(scriptProcessor) // Connect analyser output to scriptProcessor input
scriptProcessor.connect(gain) // Connect scriptProcessor output to gain input
gain.gain.value = 0 // Disable volume
gain.connect(audioCtx.destination) // Connect gain output to audiocontext destination

scriptProcessor.onaudioprocess = function (bins) {
  bins = new Float32Array(analyser.frequencyBinCount)
  analyser.getFloatFrequencyData(bins)
  for (let bin of bins) {
    ccOutput.push(bin)
  }
  analyser.disconnect()
  scriptProcessor.disconnect()
  gain.disconnect()
  let fingerprint = md5(ccOutput.buffer)
}

oscillator.start(0)


