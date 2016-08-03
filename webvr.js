let vrDisplays = navigator.getVRDisplays()
let eyePrint = ''

for (let vrDisplay of vrDisplays) {
  for (let eye of ['left', 'right']) {
    eyePrint += md5(vrDisplay.getEyeParameters(eye).offset.buffer)
  }
}


