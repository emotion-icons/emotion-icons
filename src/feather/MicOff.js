import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={1} x2={23} y1={1} y2={23} key="k0" />
,
<path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6" key="k1" />
,
<path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23" key="k2" />
,
<line x1={12} x2={12} y1={19} y2={23} key="k3" />
,
<line x1={8} x2={16} y1={23} y2={23} key="k4" />
]


const MicOff = ({ title, ...restProps }) => {
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
          ? [<title key="MicOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MicOff',
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

MicOff.displayName = 'MicOff'

MicOff.defaultProps = { height: 24, width: 24}

export default MicOff
