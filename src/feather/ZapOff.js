import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="12.41 6.75 13 2 10.57 4.92" key="k0" />
,
<polyline points="18.57 12.91 21 10 15.66 10" key="k1" />
,
<polyline points="8 8 3 14 12 14 11 22 16 16" key="k2" />
,
<line x1={1} x2={23} y1={1} y2={23} key="k3" />
]


const ZapOff = ({ title, ...restProps }) => {
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
          ? [<title key="ZapOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ZapOff',
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

ZapOff.displayName = 'ZapOff'

ZapOff.defaultProps = { height: 24, width: 24}

export default ZapOff
