import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={20} height={20} x={2} y={2} rx={5} ry={5} key="k0" />
,
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" key="k1" />
,
<line x1={17.5} x2={17.5} y1={6.5} y2={6.5} key="k2" />
]


const Instagram = ({ title, ...restProps }) => {
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
          ? [<title key="Instagram-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Instagram',
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

Instagram.displayName = 'Instagram'

Instagram.defaultProps = { height: 24, width: 24}

export default Instagram
