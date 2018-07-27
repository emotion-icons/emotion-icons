import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" key="k0" />
,
<path d="M19 10v2a7 7 0 0 1-14 0v-2" key="k1" />
,
<line x1={12} x2={12} y1={19} y2={23} key="k2" />
,
<line x1={8} x2={16} y1={23} y2={23} key="k3" />
]


const Mic = ({ title, ...restProps }) => {
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
          ? [<title key="Mic-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mic',
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

Mic.displayName = 'Mic'

Mic.defaultProps = { height: 24, width: 24}

export default Mic
