const execa = require('execa')
const paths = require('./paths')
const {PACKS, SVG_ATTRS} = require('./constants')
const fg = require('fast-glob')
const fs = require('fs-extra')
const ora = require('ora')
const path = require('path')
const {camelize, pascalize} = require('./utils')
const {toWords} = require('number-to-words')
const h2x = require('./transform/h2x')
const svgo = require('./transform/svgo')
var acorn = require('acorn-jsx')
var {parseJSX} = require('./parseJSX')
let spinner

const getComponentName = originalName => {
  originalName = originalName.replace(/^\d+/, digits => `${toWords(parseInt(digits, 10))}_`)
  return originalName.length === 1 ? originalName.toUpperCase() : pascalize(originalName)
}

const getTemplate = () =>
  new Promise((resolve, reject) =>
    fs.readFile(path.join(__dirname, 'templates', 'icon.js.txt'), (err, data) => {
      if (err) reject(err)
      else resolve(data.toString())
    }),
  )

const baseDir = path.join(__dirname, '..', 'build')

const generate = async () => {
  spinner = ora('Reading icon packs...').start()

  // const icons = (await Promise.all(PACKS.map(pack => require(`./sources/${pack}`)()))).reduce(
  //   (all, icons) => all.concat(...icons),
  //   [],
  // )
  const icons = (await Promise.all(PACKS.map(pack => require(`./sources/${pack}`)()))).reduce(
    (all, icons) => all.concat(...icons),
    [],
  )
  spinner.text = 'Reading template...'
  const template = await getTemplate()

  spinner.text = 'Building icons...'
  const totalIcons = icons.length
  let builtIcons = 0

  for (const icon of icons) {
    icon.name = getComponentName(icon.originalName)
    // Special-case the `React` icon
    if (icon.name === 'React') icon.name = 'ReactLogo'
  }

  spinner.text = 'Writing icon manifest for website...'
  const seenImports = new Set()
  await fs.writeJSON(
    path.join(__dirname, '..', 'docz', 'Icons', 'manifest.json'),
    icons
      .map(({name, originalName, pack}) => {
        const importPath = `emotion-icons/${pack}/${name}`

        if (seenImports.has(importPath)) return null
        seenImports.add(importPath)

        return {
          importPath,
          name,
          originalName,
          pack,
        }
      })
      .filter(icon => icon),
  )

  spinner.succeed(`icons manifest successfully built!`)
}

generate().catch(err => {
  if (spinner) {
    spinner.fail(err.stack)
  } else {
    console.error(err.stack)
  }
  process.exit(1)
})
