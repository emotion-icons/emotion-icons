import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 2a1 1 0 0 0-1 1v9h9a1 1 0 0 0 1-1c0-4.963-4.037-9-9-9z" key="k0" />
,
<path d="M10 14V3.243C6.004 4.155 3.011 7.731 3.011 12c0 4.957 4.032 8.989 8.989 8.989 4.269 0 7.844-2.992 8.757-6.988h-2.063C16.56 14.055 10 14 10 14z" key="k1" />
]


const PieChartAlt = ({ title, ...restProps }) => {
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
          ? [<title key="PieChartAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PieChartAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PieChartAlt.displayName = 'PieChartAlt'

PieChartAlt.defaultProps = { height: 24, width: 24}

export default PieChartAlt
