
const execa = require('execa')
const paths= require('./paths')
const {PACKS}= require('./constants')
const fg = require('fast-glob')
const fs = require('fs-extra')
const ora = require('ora')
const path = require('path')

if (!fs.existsSync(paths.TMPBUILD)) {
  fs.mkdirSync(paths.TMPBUILD);
}

let spinner
const build = async () => {
  spinner = ora('Building ESM JavaScript..').start()
  let compiler  = execa('yarn', [
  'run',
  'build:es'
])
//compiler.stdout.pipe(process.stdout)
compiler.stderr.pipe(process.stderr)
await compiler
  spinner.text = 'Building CJS bundles...'

  compiler = execa('yarn', [
    'run',
    'build:cjs'
  ])
  //compiler.stdout.pipe(process.stdout)
  compiler.stderr.pipe(process.stderr)
  await compiler


  const builtFiles = [...PACKS, 'index.js']

  spinner.text = 'Renaming and moving CJS files'

  const cjsFiles = await fg('tmp/icons-cjs/**/*.js')
  for (const cjsFile of cjsFiles) {
    const destination = path.join(
  paths.ROOT,
      cjsFile.replace('tmp/icons-cjs/', '').replace(/\.js$/, '.cjs.js'),
    )
    await fs.move(path.join(paths.ROOT, cjsFile), destination,{ overwrite: true })
  }

  await fs.remove(paths.TMPBUILD)
spinner.succeed(`Icons successfully compiled!`)
}

build().catch(err => {
  if (spinner) {
    spinner.fail(err.stack)
  } else {
    console.error(err.stack)
  }
  process.exit(1)
})
