import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="10 15 15 20 20 15" key="k0" />
,
<path d="M4 4h7a4 4 0 0 1 4 4v12" key="k1" />
]


const CornerRightDown = ({ title, ...restProps }) => {
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
          ? [<title key="CornerRightDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CornerRightDown',
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

CornerRightDown.displayName = 'CornerRightDown'

CornerRightDown.defaultProps = { height: 24, width: 24}

export default CornerRightDown
