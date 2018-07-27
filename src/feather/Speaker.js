import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={16} height={20} x={4} y={2} rx={2} ry={2} key="k0" />
,
<circle cx={12} cy={14} r={4} key="k1" />
,
<line x1={12} x2={12} y1={6} y2={6} key="k2" />
]


const Speaker = ({ title, ...restProps }) => {
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
          ? [<title key="Speaker-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Speaker',
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

Speaker.displayName = 'Speaker'

Speaker.defaultProps = { height: 24, width: 24}

export default Speaker
