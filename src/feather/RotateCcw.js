import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="1 4 1 10 7 10" key="k0" />
,
<path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" key="k1" />
]


const RotateCcw = ({ title, ...restProps }) => {
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
          ? [<title key="RotateCcw-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RotateCcw',
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

RotateCcw.displayName = 'RotateCcw'

RotateCcw.defaultProps = { height: 24, width: 24}

export default RotateCcw
