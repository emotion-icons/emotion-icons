import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={7.2} cy={14.4} r={3.2} key="k0" />
,
<circle cx={14.8} cy={18} r={2} key="k1" />
,
<circle cx={15.2} cy={8.8} r={4.8} key="k2" />
]


const BubbleChart = ({ title, ...restProps }) => {
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
          ? [<title key="BubbleChart-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BubbleChart',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BubbleChart.displayName = 'BubbleChart'

BubbleChart.defaultProps = { height: 24, width: 24}

export default BubbleChart
