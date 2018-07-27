import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 4v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm2 1h14v14H5V5z" key="k0" />
,
<path d="M11 7h2v10h-2zm4 3h2v7h-2zm-8 2h2v5H7z" key="k1" />
]


const BarChartSquare = ({ title, ...restProps }) => {
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
          ? [<title key="BarChartSquare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BarChartSquare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BarChartSquare.displayName = 'BarChartSquare'

BarChartSquare.defaultProps = { height: 24, width: 24}

export default BarChartSquare
