import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={18} height={18} x={3} y={3} rx={2} ry={2} key="k0" />
,
<line x1={3} x2={21} y1={9} y2={9} key="k1" />
,
<line x1={9} x2={9} y1={21} y2={9} key="k2" />
]


const Layout = ({ title, ...restProps }) => {
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
          ? [<title key="Layout-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Layout',
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

Layout.displayName = 'Layout'

Layout.defaultProps = { height: 24, width: 24}

export default Layout
