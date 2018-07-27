import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 6h2v11h-2zm4-3h2v14h-2zM9 9h2v8H9zm-4 3h2v5H5zm-1 7h16v2H4z" key="k0" />
]


const BarChartAlt = ({ title, ...restProps }) => {
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
          ? [<title key="BarChartAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BarChartAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BarChartAlt.displayName = 'BarChartAlt'

BarChartAlt.defaultProps = { height: 24, width: 24}

export default BarChartAlt
