import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={18} height={18} x={3} y={3} rx={2} ry={2} key="k0" />
,
<line x1={9} x2={15} y1={9} y2={15} key="k1" />
,
<line x1={15} x2={9} y1={9} y2={15} key="k2" />
]


const XSquare = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: 'middle',
        overflow: 'hidden'
      },
      ({ size,height,width,css }) => ({
        height: size ? size : height,
        width: size ? size : width,
        ...css
      }),
    ),
    {
      children: (
        title
          ? [<title key="XSquare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-XSquare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

XSquare.displayName = 'XSquare'

XSquare.defaultProps = { height: 24, width: 24}

export default XSquare
