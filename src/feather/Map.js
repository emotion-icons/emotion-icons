import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" key="k0" />
,
<line x1={8} x2={8} y1={2} y2={18} key="k1" />
,
<line x1={16} x2={16} y1={6} y2={22} key="k2" />
]


const Map = ({ title, ...restProps }) => {
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
          ? [<title key="Map-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Map',
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

Map.displayName = 'Map'

Map.defaultProps = { height: 24, width: 24}

export default Map
