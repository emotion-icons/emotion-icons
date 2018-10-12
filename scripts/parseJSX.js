var acorn = require('acorn')
var jsx = require('acorn-jsx')

const fs = require('fs-extra')

//fromhttps://github.com/TroyAlford/react-jsx-parser/blob/develop/source/components/JsxParser.js
const parseJSX = rawJSX => {
  const wrappedJsx = `<root>${rawJSX}</root>`
  let parsed = []
  // console.log('wrappedJsx', wrappedJsx)
  try {
    //    parsed = acorn.Parser.extend(jsx()).parse(wrappedJsx)
    parsed = acorn.parse(wrappedJsx, {
      plugins: {jsx: true}, // { allowNamespaces: false }
    })
    //console.log('parsed', parsed)
    parsed = parsed.body[0].expression.children || []
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('rawJSX Error', error)
    return []
  }
  //console.log(parsed)
  return parsed.map(parseExpression).filter(Boolean)
}

const parseExpression = expression => {
  /* eslint-disable no-case-declarations */
  switch (expression.type) {
    case 'JSXElement':
      return parseElement(expression)
    case 'JSXText':
      return ''
    case 'JSXAttribute':
      if (expression.value === null) return true
      return parseExpression(expression.value)
    case 'ArrayExpression':
      return expression.elements.map(parseExpression)
    case 'ObjectExpression':
      const object = {}
      expression.properties.forEach(prop => {
        object[prop.key.name || prop.key.value] = parseExpression(prop.value)
      })
      return object
    case 'Identifier':
      return (props.bindings || {})[expression.name]
    case 'JSXExpressionContainer':
      return parseExpression(expression.expression)
    case 'Literal':
      return expression.value
    case 'MemberExpression':
      return (parseExpression(expression.object) || {})[expression.property.name]
    case 'CallExpression':
      return parseExpression(expression.callee)
    case 'LogicalExpression':
      const left = parseExpression(expression.left)
      if (expression.operator === '||' && left) return true
      if ((expression.operator === '&&' && left) || (expression.operator === '||' && !left)) {
        return parseExpression(expression.right)
      }
      return false
    case 'BinaryExpression':
      switch (expression.operator) {
        case '+':
          return parseExpression(expression.left) + parseExpression(expression.right)
        case '-':
          return parseExpression(expression.left) - parseExpression(expression.right)
        case '*':
          return parseExpression(expression.left) * parseExpression(expression.right)
        case '/':
          return parseExpression(expression.left) / parseExpression(expression.right)
        default:
          return undefined
      }
    default:
      return undefined
  }
}

const parseElement = (element, props = {}) => {
  const {allowUnknownElements, components = {}, componentsOnly, onError} = props
  const {children: childNodes = [], openingElement} = element
  const {attributes = [], name: {name} = {}} = openingElement

  const blacklistedAttrs = [].map(attr => (attr instanceof RegExp ? attr : new RegExp(attr, 'i')))
  const blacklistedTags = [].map(tag => tag.trim().toLowerCase()).filter(Boolean)

  if (/^(html|head|body)$/i.test(name)) return childNodes.map(c => parseElement(c))
  if (blacklistedTags.indexOf(name.trim().toLowerCase()) !== -1) return undefined
  if (!components[name]) {
    if (componentsOnly) return undefined
  }

  let children
  if (components[name]) {
    children = childNodes.map(parseExpression)
    if (!components[name]) {
      children = children.filter(child => typeof child !== 'string' || !/^\s*$/.test(child))
    }

    if (children.length === 0) {
      children = undefined
    } else if (children.length === 1) {
      ;[children] = children
    }
  }

  attributes.forEach(expr => {
    const rawName = expr.name.name
    const attributeName = rawName
    // if the value is null, this is an implicitly "true" prop, such as readOnly
    const value = parseExpression(expr)

    const matches = blacklistedAttrs.filter(re => re.test(attributeName))
    if (matches.length === 0) props[attributeName] = value
  })

  if (typeof props.style === 'string') {
    props.style = parseStyle(props.style)
  }

  if (children) props.children = children

  return {type: components[name] || name.toLowerCase(), props}
}

module.exports = {
  parseJSX,
}
