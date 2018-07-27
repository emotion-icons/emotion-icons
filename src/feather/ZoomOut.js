import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={11} cy={11} r={8} key="k0" />
,
<line x1={21} x2={16.65} y1={21} y2={16.65} key="k1" />
,
<line x1={8} x2={14} y1={11} y2={11} key="k2" />
]


const ZoomOut = ({ title, ...restProps }) => {
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
          ? [<title key="ZoomOut-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ZoomOut',
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

ZoomOut.displayName = 'ZoomOut'

ZoomOut.defaultProps = { height: 24, width: 24}

export default ZoomOut
