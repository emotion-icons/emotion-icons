import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="21 8 21 21 3 21 3 8" key="k0" />
,
<rect width={22} height={5} x={1} y={3} key="k1" />
,
<line x1={10} x2={14} y1={12} y2={12} key="k2" />
]


const Archive = ({ title, ...restProps }) => {
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
          ? [<title key="Archive-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Archive',
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

Archive.displayName = 'Archive'

Archive.defaultProps = { height: 24, width: 24}

export default Archive
