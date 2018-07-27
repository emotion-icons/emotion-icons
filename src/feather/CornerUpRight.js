import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="15 14 20 9 15 4" key="k0" />
,
<path d="M4 20v-7a4 4 0 0 1 4-4h12" key="k1" />
]


const CornerUpRight = ({ title, ...restProps }) => {
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
          ? [<title key="CornerUpRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CornerUpRight',
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

CornerUpRight.displayName = 'CornerUpRight'

CornerUpRight.defaultProps = { height: 24, width: 24}

export default CornerUpRight
