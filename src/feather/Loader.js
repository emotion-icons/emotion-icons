import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={12} x2={12} y1={2} y2={6} key="k0" />
,
<line x1={12} x2={12} y1={18} y2={22} key="k1" />
,
<line x1={4.93} x2={7.76} y1={4.93} y2={7.76} key="k2" />
,
<line x1={16.24} x2={19.07} y1={16.24} y2={19.07} key="k3" />
,
<line x1={2} x2={6} y1={12} y2={12} key="k4" />
,
<line x1={18} x2={22} y1={12} y2={12} key="k5" />
,
<line x1={4.93} x2={7.76} y1={19.07} y2={16.24} key="k6" />
,
<line x1={16.24} x2={19.07} y1={7.76} y2={4.93} key="k7" />
]


const Loader = ({ title, ...restProps }) => {
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
          ? [<title key="Loader-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Loader',
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

Loader.displayName = 'Loader'

Loader.defaultProps = { height: 24, width: 24}

export default Loader
