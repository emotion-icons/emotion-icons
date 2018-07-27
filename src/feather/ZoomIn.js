import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={11} cy={11} r={8} key="k0" />
,
<line x1={21} x2={16.65} y1={21} y2={16.65} key="k1" />
,
<line x1={11} x2={11} y1={8} y2={14} key="k2" />
,
<line x1={8} x2={14} y1={11} y2={11} key="k3" />
]


const ZoomIn = ({ title, ...restProps }) => {
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
          ? [<title key="ZoomIn-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ZoomIn',
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

ZoomIn.displayName = 'ZoomIn'

ZoomIn.defaultProps = { height: 24, width: 24}

export default ZoomIn
