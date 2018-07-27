import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="14 15 9 20 4 15" key="k0" />
,
<path d="M20 4h-7a4 4 0 0 0-4 4v12" key="k1" />
]


const CornerLeftDown = ({ title, ...restProps }) => {
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
          ? [<title key="CornerLeftDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CornerLeftDown',
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

CornerLeftDown.displayName = 'CornerLeftDown'

CornerLeftDown.defaultProps = { height: 24, width: 24}

export default CornerLeftDown
