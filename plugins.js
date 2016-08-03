var md5 = require('md5')

let pluginArray = navigator.plugins
let pluginString = ''

for (plugin of pluginArray) {
  pluginString += plugin.name + plugin.version
}

let fingerprint = md5(pluginString)


