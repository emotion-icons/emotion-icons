import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={16} height={20} x={4} y={2} rx={2} ry={2} transform="rotate(180 12 12)" key="k0" />
,
<line x1={12} x2={12} y1={18} y2={18} key="k1" />
]


const Tablet = ({ title, ...restProps }) => {
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
          ? [<title key="Tablet-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Tablet',
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

Tablet.displayName = 'Tablet'

Tablet.defaultProps = { height: 24, width: 24}

export default Tablet
