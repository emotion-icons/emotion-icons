import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={20} height={14} x={2} y={3} rx={2} ry={2} key="k0" />
,
<line x1={8} x2={16} y1={21} y2={21} key="k1" />
,
<line x1={12} x2={12} y1={17} y2={21} key="k2" />
]


const Monitor = ({ title, ...restProps }) => {
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
          ? [<title key="Monitor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Monitor',
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

Monitor.displayName = 'Monitor'

Monitor.defaultProps = { height: 24, width: 24}

export default Monitor
