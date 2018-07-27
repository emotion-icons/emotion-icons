import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 5h2v16H8zm4 2h2v14h-2zm4-4h2v18h-2zM4 12h2v9H4z" key="k0" />
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
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BarChart.displayName = 'BarChart'

BarChart.defaultProps = { height: 24, width: 24}

export default BarChart
