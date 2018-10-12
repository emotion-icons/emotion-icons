import * as path from 'path'
import pkg from './package.json'

const styles = {
  body: {
    fontFamily: "'Source Sans Pro', Helvetica, sans-serif",
    fontSize: 16,
    lineHeight: 1.6,
  },

  container: {
    width: ['100%', '100%', 920],
    padding: ['20px', '0 40px 40px'],
    // background:
    //   'linear-gradient(to bottom, rgba(70, 201, 229, 0.8) 0%, rgba(210, 106, 194, 0.8) 100%)',
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundAttachment: 'fixed',
  },
  h1: {
    margin: ['30px 0 20px', '60px 0 20px', '40px 0'],
    fontSize: [36, 42, 48],
    fontWeight: 100,
    letterSpacing: '-0.02em',
  },
  h2: {
    margin: ['20px 0 20px', '35px 0 20px'],
    lineHeight: ['1.2em', '1.5em'],
    fontSize: 28,
    fontWeight: 600,
    letterSpacing: '-0.02em',
  },
  h3: {
    margin: '25px 0 10px',
    fontSize: [22, 24],
    fontWeight: 400,
  },
  h4: {
    fontSize: 20,
    fontWeight: 400,
  },
  h5: {
    fontSize: 18,
    fontWeight: 400,
  },
  h6: {
    fontSize: 16,
    fontWeight: 400,
  },
  list: {
    padding: 0,
    margin: '10px 0 10px 20px',
  },
  playground: {
    padding: ['1.5em', '2em'],
  },
  code: {
    margin: '0 3px',
    padding: '4px 6px',
    borderRadius: '3px',
    fontFamily: '"Source Code Pro", monospace',
    fontSize: '0.85em',
  },
  pre: {
    fontFamily: '"Source Code Pro", monospace',
    fontSize: 14,
    lineHeight: 1.8,
  },
  table: {
    overflowY: ['hidden', 'hidden', 'hidden', 'initial'],
    display: ['block', 'block', 'block', 'table'],
    width: '100%',
    marginBottom: [20, 40],
    fontFamily: '"Source Code Pro", monospace',
    fontSize: 14,
  },
  blockquote: {
    margin: '25px 0',
    padding: '20px',
    fontStyle: 'italic',
    fontSize: 18,
  },
}

const libName = pkg.name
const DIR = path.resolve(__dirname)
const SRC = path.join(DIR, 'src')
const DOCS = path.join(DIR, 'docz')
const PUBLIC = path.join(DOCS, 'public')

export default {
  dest: './docs',
  // files: './docz/**/*.mdx',
  ordering: 'ascending',
  propsParser: false,
  src: './docz',
  title: libName,
  description: pkg.description,
  base: `/${libName}/`,
  themeConfig: {
    mode: 'dark',
  },
  theme: '@roseys/docz-theme',

  indexHtml: path.join(PUBLIC, 'index.html'),
  // //  theme: 'src/theme/index',
  // // ordering: 'ascending',
  // //   propsParser: false,
  // //  mdPlugins: [externalLinks.default],
  htmlContext: {
    favicon: path.join(PUBLIC, 'favicon.ico'),
  },

  modifyBundlerConfig: config => {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      '@docz': path.resolve(__dirname, 'docz'),
      'emotion-icons': SRC,
      '@public': PUBLIC,
      //  '@fonts': `${PUBLIC}/fonts`,
      // '@images': `${PUBLIC}/images`,
      //   '@fonts': `${PUBLIC}/fonts`,
      //   '@images': `${PUBLIC}/images`,
      //   '@components': `${SRC}/theme/components`,
      //   '@styles': `${SRC}/theme/styles`,
    })

    return config
  },
}
