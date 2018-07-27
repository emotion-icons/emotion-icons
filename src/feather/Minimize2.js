import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="4 14 10 14 10 20" key="k0" />
,
<polyline points="20 10 14 10 14 4" key="k1" />
,
<line x1={14} x2={21} y1={10} y2={3} key="k2" />
,
<line x1={3} x2={10} y1={21} y2={14} key="k3" />
]


const Minimize2 = ({ title, ...restProps }) => {
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
          ? [<title key="Minimize2-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Minimize2',
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

Minimize2.displayName = 'Minimize2'

Minimize2.defaultProps = { height: 24, width: 24}

export default Minimize2
