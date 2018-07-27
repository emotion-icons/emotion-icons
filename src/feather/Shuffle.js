import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="16 3 21 3 21 8" key="k0" />
,
<line x1={4} x2={21} y1={20} y2={3} key="k1" />
,
<polyline points="21 16 21 21 16 21" key="k2" />
,
<line x1={15} x2={21} y1={15} y2={21} key="k3" />
,
<line x1={4} x2={9} y1={4} y2={9} key="k4" />
]


const Shuffle = ({ title, ...restProps }) => {
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
          ? [<title key="Shuffle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Shuffle',
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

Shuffle.displayName = 'Shuffle'

Shuffle.defaultProps = { height: 24, width: 24}

export default Shuffle
