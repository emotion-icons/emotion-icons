const H = require('h2x-core')
const jsx = require('h2x-plugin-jsx').default

const extractChildren = () => ({
  visitor: {
    HTMLElement: {
      enter(path, state) {
        if (path.node.tagName !== 'svg') return
        state.children = Array.from(path.node.childNodes)
      },
    },
  },
})

const replaceChildren = () => ({
  visitor: {
    HTMLElement: {
      enter(path, state) {
        //console.log('Replace----', {path, state})
        if (path.node.tagName !== 'svg') return
        path.replace(state.replacement)
      },
    },
  },
})

const stripAttribute = attribute => () => ({
  visitor: {
    JSXAttribute: {
      enter(path) {
        //   console.log('stripAttribute----')
        if (path.node.name === attribute) {
          path.remove()
        }
      },
    },
  },
})

const removeComments = () => ({
  visitor: {
    JSXComment: {
      enter(path) {
        //  console.log('removeComments----')
        path.remove()
      },
    },
  },
})

const removeStyle = () => ({
  visitor: {
    JSXElement: {
      enter(path) {
        //   console.log('removeStyle----')
        if (path.node.name === 'style') {
          path.remove()
        }
      },
    },
  },
})

const processSVG = () => ({
  visitor: {
    HTMLElement: {
      enter(path, state) {
        if (path.node.tagName === 'svg') {
          //   console.log('----processSVG----1')
          const attributes = Array.from(path.node.attributes)

          state.attrs = attributes.reduce(
            (attrs, attr) => ({...attrs, [attr.name]: attr.value}),
            {},
          )
          // console.log('----processSVG----2')
          const heightAttribute = attributes.find(attr => attr.name === 'height')
          const widthAttribute = attributes.find(attr => attr.name === 'width')
          const viewBoxAttribute = attributes.find(attr => attr.name === 'viewBox')
          // console.log('----processSVG----3')
          state.height = heightAttribute ? heightAttribute.value : null
          state.width = widthAttribute ? widthAttribute.value : null
          state.viewBox = viewBoxAttribute ? viewBoxAttribute.value : null
          // console.log({pa: path.node.childNodes})

          state.children = Array.from(path.node.childNodes)
        }
      },
    },
  },
})

module.exports = (code, state) => {
  // First pass to extract out attributes and children
  // console.log('H2x CORE', {code, state})
  H.transform(code, {plugins: [extractChildren, processSVG], state})

  // Second pass over the extracted children
  return state.children.map(replacement =>
    H.transform('<svg />', {
      plugins: [
        replaceChildren,
        jsx,
        stripAttribute('xmlns'),
        stripAttribute('path'),
        removeComments,
        removeStyle,
      ],
      state: {replacement},
    }),
  )
}
