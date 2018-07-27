import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="9 10 4 15 9 20" key="k0" />
,
<path d="M20 4v7a4 4 0 0 1-4 4H4" key="k1" />
]


const CornerDownLeft = ({ title, ...restProps }) => {
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
          ? [<title key="CornerDownLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CornerDownLeft',
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

CornerDownLeft.displayName = 'CornerDownLeft'

CornerDownLeft.defaultProps = { height: 24, width: 24}

export default CornerDownLeft
