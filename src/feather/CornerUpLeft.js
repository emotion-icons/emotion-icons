import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="9 14 4 9 9 4" key="k0" />
,
<path d="M20 20v-7a4 4 0 0 0-4-4H4" key="k1" />
]


const CornerUpLeft = ({ title, ...restProps }) => {
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
          ? [<title key="CornerUpLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CornerUpLeft',
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

CornerUpLeft.displayName = 'CornerUpLeft'

CornerUpLeft.defaultProps = { height: 24, width: 24}

export default CornerUpLeft
