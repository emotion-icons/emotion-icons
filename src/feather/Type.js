import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="4 7 4 4 20 4 20 7" key="k0" />
,
<line x1={9} x2={15} y1={20} y2={20} key="k1" />
,
<line x1={12} x2={12} y1={4} y2={20} key="k2" />
]


const Type = ({ title, ...restProps }) => {
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
          ? [<title key="Type-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Type',
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

Type.displayName = 'Type'

Type.defaultProps = { height: 24, width: 24}

export default Type
