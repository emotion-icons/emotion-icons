import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={18} height={18} x={3} y={3} rx={2} ry={2} key="k0" />
,
<line x1={12} x2={12} y1={8} y2={16} key="k1" />
,
<line x1={8} x2={16} y1={12} y2={12} key="k2" />
]


const PlusSquare = ({ title, ...restProps }) => {
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
          ? [<title key="PlusSquare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PlusSquare',
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

PlusSquare.displayName = 'PlusSquare'

PlusSquare.defaultProps = { height: 24, width: 24}

export default PlusSquare
