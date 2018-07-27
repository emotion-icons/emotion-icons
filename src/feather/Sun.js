import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={5} key="k0" />
,
<line x1={12} x2={12} y1={1} y2={3} key="k1" />
,
<line x1={12} x2={12} y1={21} y2={23} key="k2" />
,
<line x1={4.22} x2={5.64} y1={4.22} y2={5.64} key="k3" />
,
<line x1={18.36} x2={19.78} y1={18.36} y2={19.78} key="k4" />
,
<line x1={1} x2={3} y1={12} y2={12} key="k5" />
,
<line x1={21} x2={23} y1={12} y2={12} key="k6" />
,
<line x1={4.22} x2={5.64} y1={19.78} y2={18.36} key="k7" />
,
<line x1={18.36} x2={19.78} y1={5.64} y2={4.22} key="k8" />
]


const Sun = ({ title, ...restProps }) => {
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
          ? [<title key="Sun-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sun',
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

Sun.displayName = 'Sun'

Sun.defaultProps = { height: 24, width: 24}

export default Sun
