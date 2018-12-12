const simpleIcons = require('simple-icons')

module.exports = async () =>
  Object.keys(simpleIcons).map(iconKey => {
    const icon = simpleIcons[iconKey]
    return {
      originalName: icon.title.replace(/\+/g, "Plus").replace(/[ .\-!’]/g, ''),
      source: icon.svg,
      pack: 'simpleIcons',
      hex:icon.hex,
      width: 24,
      height: 24,
    }
  })
