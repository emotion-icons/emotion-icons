const fs = require('fs-extra')
const ora = require('ora')
const path = require('path')



const DEST = path.join(__dirname, '..', 'src')
//const BUILDSRC = path.join(BUILD,'src')
//const SRC = path.join(__dirname, '..', 'src')
const ICONTEMPLATEJS=path.join(__dirname, 'templates', 'icon.js.template')
const TMPBUILD=path.join(__dirname, '..', 'tmp')
const ROOT=path.join(__dirname, '..')
module.exports = {
DEST,ICONTEMPLATEJS,TMPBUILD,ROOT
};
