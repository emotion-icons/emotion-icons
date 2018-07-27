import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" key="k0" />
,
<line x1={3} x2={21} y1={6} y2={6} key="k1" />
,
<path d="M16 10a4 4 0 0 1-8 0" key="k2" />
]


const ShoppingBag = ({ title, ...restProps }) => {
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
          ? [<title key="ShoppingBag-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ShoppingBag',
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

ShoppingBag.displayName = 'ShoppingBag'

ShoppingBag.defaultProps = { height: 24, width: 24}

export default ShoppingBag
