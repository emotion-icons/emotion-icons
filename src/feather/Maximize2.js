import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="15 3 21 3 21 9" key="k0" />
,
<polyline points="9 21 3 21 3 15" key="k1" />
,
<line x1={21} x2={14} y1={3} y2={10} key="k2" />
,
<line x1={3} x2={10} y1={21} y2={14} key="k3" />
]


const Maximize2 = ({ title, ...restProps }) => {
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
          ? [<title key="Maximize2-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Maximize2',
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

Maximize2.displayName = 'Maximize2'

Maximize2.defaultProps = { height: 24, width: 24}

export default Maximize2
