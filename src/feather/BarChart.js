import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={12} x2={12} y1={20} y2={10} key="k0" />
,
<line x1={18} x2={18} y1={20} y2={4} key="k1" />
,
<line x1={6} x2={6} y1={20} y2={16} key="k2" />
]


const BarChart = ({ title, ...restProps }) => {
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
          ? [<title key="BarChart-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BarChart',
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

BarChart.displayName = 'BarChart'

BarChart.defaultProps = { height: 24, width: 24}

export default BarChart
