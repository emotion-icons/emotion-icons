
const execa = require('execa')
const paths= require('./paths')
const {PACKS,SVG_ATTRS}= require('./constants')
const fg = require('fast-glob')
const fs = require('fs-extra')
const ora = require('ora')
const path = require('path')
const {camelize,pascalize}= require('./utils')
const {toWords} = require('number-to-words')
const h2x = require('./transform/h2x')
const svgo = require('./transform/svgo')
var acorn = require('acorn-jsx');
var {parseJSX} = require('./parseJSX');
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
    (all, icons) => all.concat(...icons.slice(0,5)),
    [],
  )
  spinner.text = 'Reading template...'
  const template = await getTemplate()

  spinner.text = 'Clearing desination files...'
  const destinationFiles = [
    'build',
    ...PACKS,
    'index.cjs.js',
    'index.js',
  ]
  for (const destinationFile of destinationFiles) {
    await fs.remove(path.join(__dirname, '..', destinationFile))
  }

  spinner.text = 'Building icons...'
  const totalIcons = icons.length
  let builtIcons = 0

  for (const icon of icons) {
    const state = {}

    let result = icon.source
    result = await svgo(result)
    result = await h2x(result, state)
    result = result.join(',\n')

    icon.name = getComponentName(icon.originalName)
    icon.height = state.height || icon.height
    icon.width = state.width || icon.width
    icon.viewBox = state.viewBox || `0 0 ${icon.width} ${icon.height}`

    icon.attrs = {fill: 'currentColor'}
    for (const attr of SVG_ATTRS) {
      if (attr in state.attrs) {
        icon.attrs[camelize(attr)] = state.attrs[attr]
      }
    }

    // Special-case the `React` icon
    if (icon.name === 'React') icon.name = 'ReactLogo'


const dataP= parseJSX(result)

const color=icon.hex?{color:`#${icon.hex}`}: {}
const width=icon.width?{width:icon.width}: {}
const height=icon.height?{height:icon.height}: {}
const hex=icon.hex?{hex:`#${icon.hex}`}: {}
const css={
  display: 'inline-block',
  verticalAlign: icon.verticalAlign || 'middle',
  overflow: 'hidden',
  maxHeight: '100%',
  maxWidth: '100%',
  margin: 'auto',
}

const config={
  displayName: icon.name,
  attrs:{...icon.attrs },
css,
...width,...height,...color,
  titleKey:  `${icon.name}-title`,
  viewBox: icon.viewBox,
  labelledby: `icon-title-${icon.name}`,
  body: dataP
}
    const component = (cjs = false) =>
      template
      .replace(/{{attrs}}/g, JSON.stringify(icon.attrs, null, 2).slice(2, -2))
      .replace(/{{config}}/g, JSON.stringify(config))
      .replace(/{{height}}/g, icon.height)
      .replace(/{{name}}/g, icon.name)
      .replace(/{{svg}}/g, result)
      .replace(/{{svgdata}}/g, JSON.stringify(dataP))
      .replace(/{{verticalAlign}}/g, icon.verticalAlign || 'middle')
      .replace(/{{viewBox}}/g, icon.viewBox)
      .replace(/{{width}}/g, icon.width)
      .replace(/{{defaultFill}}/g, icon.hex?`fill:'#${icon.hex}',`:'')
    //  .replace(/{{hex}}/g, icon.hex?`export const hex='#${icon.hex}'`:'')

    const destinationPath = path.join(baseDir, 'src', icon.pack)
      const destinationPath1 = path.join(baseDir, 'srccjs', icon.pack)

    await fs.outputFile(path.join(destinationPath, `${icon.name}.js`), component())
    await fs.outputFile(path.join(destinationPath1, `${icon.name}.cjs.js`), component(true))

    spinner.text = `[${++builtIcons} / ${totalIcons}] Built ${icon.pack}/${icon.name}...`
  }
await fs.copyFile(path.join(__dirname, 'templates','createIcon.js'), path.join(baseDir,'src','createIcon.js'), {overwrite: true})
await fs.copyFile(path.join(__dirname, 'templates','createIcon.js'), path.join(baseDir,'srccjs','createIcon.cjs.js'), {overwrite: true})
  spinner.text = 'Writing index files...'

  const writeIndexFiles = async (cjs = false) => {
    for (const iconPack of PACKS) {
      const seenNames = new Set()

      const packIcons = icons.filter(({pack}) => pack === iconPack)
      await fs.outputFile(
        path.join(baseDir, cjs?'srccjs':'src', iconPack, cjs ? 'index.cjs.js' : 'index.js'),

        packIcons
          .map(({name}) => {
            // The Material icon pack has one icon incorrectly in the pack twice
            const seen = seenNames.has(name)
            seenNames.add(name)
            return seen ? null : `export {default as ${name}} from './${name}${cjs ? '.cjs' : ''}'`
          })
          .filter(lines => lines)
          .join('\n') ,
      )
    }

    await fs.writeFileSync(
      path.join(baseDir, cjs?'srccjs':'src', cjs ? 'index.cjs.js' : 'index.js'),
      `
${PACKS.map(
        (pack, idx) =>
          `import * as ${camelize(pack)} from './${pack}${cjs ? '/index.cjs' : ''}'`,
      ).join('\n')}
export {default as createIcon} from './createIcon${cjs ? '.cjs' : ''}'
export {${PACKS.map(camelize).join(', ')}}
`,
    )
  }

  await writeIndexFiles()
  await writeIndexFiles(true)

  spinner.text='Building ESM JavaScript..'
    let compiler  = execa('babel', [
    './build/src',
    '--out-dir',
    '.',
    '--ignore',
    '*.spec.js,*.cjs.js'
  ],{cwd:paths.ROOT})
  compiler.stdout.pipe(process.stdout)
  compiler.stderr.pipe(process.stderr)
  await compiler
  spinner.text = 'Building CJS bundles...'

  compiler  = execa('babel', [
  './build/srccjs',
  '--out-dir',
  '.',
  '--presets','stage-2,react,env',
  '--ignore',
  '*.spec.js,*.test.js'
  ],{cwd:paths.ROOT})

  compiler.stdout.pipe(process.stdout)
  compiler.stderr.pipe(process.stderr)
  await compiler

spinner.text = 'Moving src...'

await fs.move(path.join(baseDir, 'src',), path.join(baseDir,'..', 'src',), {overwrite: true})

  //
  // spinner.text = 'Copying files to destination...'
  // const builtFiles = [...PACKS,'index.cjs.js', 'index.js']
  // for (const builtFile of builtFiles) {
  //   await fs.remove(path.join(__dirname, '..', builtFile))
  //   await fs.move(path.join(baseDir, 'icons', builtFile), path.join(__dirname, '..', builtFile))
  // }
  //
  // const cjsFiles = await fg('build/icons-cjs/**/*.cjs.js')
  // for (const cjsFile of cjsFiles) {
  //   const destination = path.join(__dirname, '..', cjsFile.replace('build/icons-cjs/', ''))
  //   await fs.move(path.join(__dirname, '..', cjsFile), destination, {overwrite: true})
  // }
  //

  spinner.text = 'Writing icon manifest for website...'
  const seenImports = new Set()
  await fs.writeJSON(
    path.join(__dirname, '..','docs','src', 'manifest.json'),
    icons
      .map(({name, originalName, pack}) => {
        const importPath = `styled-icons/${pack}/${name}`

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

  spinner.succeed(`${totalIcons} icons successfully built!`)
}

generate().catch(err => {
  if (spinner) {
    spinner.fail(err.stack)
  } else {
    console.error(err.stack)
  }
  process.exit(1)
})
