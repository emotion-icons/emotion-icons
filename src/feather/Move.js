import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="5 9 2 12 5 15" key="k0" />
,
<polyline points="9 5 12 2 15 5" key="k1" />
,
<polyline points="15 19 12 22 9 19" key="k2" />
,
<polyline points="19 9 22 12 19 15" key="k3" />
,
<line x1={2} x2={22} y1={12} y2={12} key="k4" />
,
<line x1={12} x2={12} y1={2} y2={22} key="k5" />
]


const Move = ({ title, ...restProps }) => {
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
          ? [<title key="Move-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Move',
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

Move.displayName = 'Move'

Move.defaultProps = { height: 24, width: 24}

export default Move
