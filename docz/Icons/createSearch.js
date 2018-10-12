import Fuse from 'fuse.js'

const fuseOptions = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 3,
  keys: ['importPath', 'name', 'originalName'],
}

export default icons => new Fuse(icons, fuseOptions)
