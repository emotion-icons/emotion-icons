const fg = require('fast-glob')
const fs = require('fs-extra')

module.exports = async () => {
  const sourceFiles = await fg('node_modules/ionicons/dist/ionicons/svg/md*.svg')

  return sourceFiles.map(filename => {
    const match = filename.match(/md-([^}]+).svg/)
    return {
      originalName: match[1],
      source: fs.readFileSync(filename).toString(),
      pack: 'ion-md'
    }
  })
}
