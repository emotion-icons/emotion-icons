import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={18} cy={5} r={3} key="k0" />
,
<circle cx={6} cy={12} r={3} key="k1" />
,
<circle cx={18} cy={19} r={3} key="k2" />
,
<line x1={8.59} x2={15.42} y1={13.51} y2={17.49} key="k3" />
,
<line x1={15.41} x2={8.59} y1={6.51} y2={10.49} key="k4" />
]


const Share2 = ({ title, ...restProps }) => {
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
          ? [<title key="Share2-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Share2',
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

Share2.displayName = 'Share2'

Share2.defaultProps = { height: 24, width: 24}

export default Share2
