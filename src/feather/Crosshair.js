import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={10} key="k0" />
,
<line x1={22} x2={18} y1={12} y2={12} key="k1" />
,
<line x1={6} x2={2} y1={12} y2={12} key="k2" />
,
<line x1={12} x2={12} y1={6} y2={2} key="k3" />
,
<line x1={12} x2={12} y1={22} y2={18} key="k4" />
]


const Crosshair = ({ title, ...restProps }) => {
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
          ? [<title key="Crosshair-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Crosshair',
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

Crosshair.displayName = 'Crosshair'

Crosshair.defaultProps = { height: 24, width: 24}

export default Crosshair
