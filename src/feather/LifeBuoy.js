import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={10} key="k0" />
,
<circle cx={12} cy={12} r={4} key="k1" />
,
<line x1={4.93} x2={9.17} y1={4.93} y2={9.17} key="k2" />
,
<line x1={14.83} x2={19.07} y1={14.83} y2={19.07} key="k3" />
,
<line x1={14.83} x2={19.07} y1={9.17} y2={4.93} key="k4" />
,
<line x1={14.83} x2={18.36} y1={9.17} y2={5.64} key="k5" />
,
<line x1={4.93} x2={9.17} y1={19.07} y2={14.83} key="k6" />
]


const LifeBuoy = ({ title, ...restProps }) => {
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
          ? [<title key="LifeBuoy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LifeBuoy',
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

LifeBuoy.displayName = 'LifeBuoy'

LifeBuoy.defaultProps = { height: 24, width: 24}

export default LifeBuoy
