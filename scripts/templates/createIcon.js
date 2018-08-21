import React from 'react'
import styled from 'react-emotion'

function memoize(fn) {
  const cache = {}

  return (arg) => {
    if (cache[arg] === undefined) cache[arg] = fn(arg)
    return cache[arg]
  }
}

const isPropValid = memoize(prop =>
  new RegExp(
    `^((accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baseProfile|baselineShift|bbox|begin|bias|by|calcMode|capHeight|clip|clipPath|clipPathUnits|clipRule|color|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|height|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerHeight|markerMid|markerStart|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|paintOrder|panose1|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textLength|textRendering|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|width|widths|wordSpacing|writingMode|x|x1|x2|xChannelSelector|xHeight|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlLang|xmlSpace|xmlns|xmlnsXlink|y|y1|y2|yChannelSelector|z|zoomAndPan)|(children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|checkedLink|innerHTML|suppressContentEditableWarning|className|about|acceptCharset|accessKey|allowFullScreen|allowTransparency|autoComplete|autoFocus|autoPlay|capture|cellPadding|cellSpacing|charSet|classID|className|colSpan|contentEditable|contextMenu|crossOrigin|dangerouslySetInnerHTML|datatype|dateTime|dir|draggable|encType|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|hidden|hrefLang|htmlFor|httpEquiv|icon|id|inlist|inputMode|is|itemID|itemProp|itemRef|itemScope|itemType|keyParams|keyType|lang|marginHeight|marginWidth|maxLength|mediaGroup|minLength|noValidate|prefix|property|radioGroup|readOnly|resource|role|rowSpan|scoped|seamless|security|spellCheck|srcDoc|srcLang|srcSet|style|suppressContentEditableWarning|tabIndex|title|typeof|unselectable|useMap|vocab|wmode)|(on[A-Z].*)|((data|aria)-.*))$`,
  ).test(prop),
)

const createInnerElements = body =>
  body.map(item =>
    React.createElement(item.type, { ...item.props }),
  )

function calcRatio(value, ratio = 1) {
  if (typeof ratio !== 'number') return value
  if (typeof value === 'number') return value * ratio
  const unitlessValue = parseFloat(value)
  return unitlessValue * ratio + value.replace(`${unitlessValue}`, '')
}

const calcDimension = (key, { size, ratio, ...HW }) => {
  const targetV = HW[key]
  const value = size
    ? ratio
      ? calcRatio(size, ratio)
      : size
    : targetV
      ? ratio
        ? calcRatio(targetV, ratio)
        : targetV
      : null
  return value ? { [key]: value } : {}
}

const createIcon = config => {
  const Icon = ({ title, ...restProps }) => {
    return React.createElement(
      styled('svg', {
        shouldForwardProp: name =>
          !['width', 'size', 'height', 'css', 'color'].includes(name) &&
          isPropValid(name),
      })(
        ({
          size,
          ratio,
          height = config['height'],
          width = config['width'],
          css,
          color = config['color'],
        }) => ({
          ...config.css,
          ...calcDimension('height', { size, ratio, height, width }),
          ...calcDimension('width', { size, ratio, height, width }),
          ...(color ? { color } : {}),
          ...css,
        }),
      ),
      {
        children: title
          ? [
              React.createElement(
                'title',
                { key: config.titleKey  },
                title,
              ),
              ...createInnerElements(config.body),
            ]
          : createInnerElements(config.body),
        viewBox: config.viewBox,
        'aria-hidden': title ? null : 'true',
        'aria-labelledby': title && config.labelledby,
        focusable: 'false',
        role: title ? undefined : 'img',
        ...config.attrs,
        ...restProps,
      },
    )
  }
  Icon.displayName = config.displayName

  Icon.defaultProps = config.defaultProps
  return Icon
}

export default createIcon
