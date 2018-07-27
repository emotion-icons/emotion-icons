import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={10} key="k0" />
,
<circle cx={12} cy={12} r={4} key="k1" />
,
<line x1={21.17} x2={12} y1={8} y2={8} key="k2" />
,
<line x1={3.95} x2={8.54} y1={6.06} y2={14} key="k3" />
,
<line x1={10.88} x2={15.46} y1={21.94} y2={14} key="k4" />
]


const Chrome = ({ title, ...restProps }) => {
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
          ? [<title key="Chrome-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Chrome',
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

Chrome.displayName = 'Chrome'

Chrome.defaultProps = { height: 24, width: 24}

export default Chrome
