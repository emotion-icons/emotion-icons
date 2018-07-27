import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={7} height={7} x={3} y={3} key="k0" />
,
<rect width={7} height={7} x={14} y={3} key="k1" />
,
<rect width={7} height={7} x={14} y={14} key="k2" />
,
<rect width={7} height={7} x={3} y={14} key="k3" />
]


const Grid = ({ title, ...restProps }) => {
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
          ? [<title key="Grid-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Grid',
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

Grid.displayName = 'Grid'

Grid.defaultProps = { height: 24, width: 24}

export default Grid
