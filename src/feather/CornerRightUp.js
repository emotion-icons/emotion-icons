import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="10 9 15 4 20 9" key="k0" />
,
<path d="M4 20h7a4 4 0 0 0 4-4V4" key="k1" />
]


const CornerRightUp = ({ title, ...restProps }) => {
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
          ? [<title key="CornerRightUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CornerRightUp',
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

CornerRightUp.displayName = 'CornerRightUp'

CornerRightUp.defaultProps = { height: 24, width: 24}

export default CornerRightUp
