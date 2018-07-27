import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={18} x2={18} y1={20} y2={10} key="k0" />
,
<line x1={12} x2={12} y1={20} y2={4} key="k1" />
,
<line x1={6} x2={6} y1={20} y2={14} key="k2" />
]


const BarChart2 = ({ title, ...restProps }) => {
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
          ? [<title key="BarChart2-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BarChart2',
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

BarChart2.displayName = 'BarChart2'

BarChart2.defaultProps = { height: 24, width: 24}

export default BarChart2
