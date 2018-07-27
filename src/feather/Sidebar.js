import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={18} height={18} x={3} y={3} rx={2} ry={2} key="k0" />
,
<line x1={9} x2={9} y1={3} y2={21} key="k1" />
]


const Sidebar = ({ title, ...restProps }) => {
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
          ? [<title key="Sidebar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sidebar',
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

Sidebar.displayName = 'Sidebar'

Sidebar.defaultProps = { height: 24, width: 24}

export default Sidebar
