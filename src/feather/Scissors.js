import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={6} cy={6} r={3} key="k0" />
,
<circle cx={6} cy={18} r={3} key="k1" />
,
<line x1={20} x2={8.12} y1={4} y2={15.88} key="k2" />
,
<line x1={14.47} x2={20} y1={14.48} y2={20} key="k3" />
,
<line x1={8.12} x2={12} y1={8.12} y2={12} key="k4" />
]


const Scissors = ({ title, ...restProps }) => {
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
          ? [<title key="Scissors-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Scissors',
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

Scissors.displayName = 'Scissors'

Scissors.defaultProps = { height: 24, width: 24}

export default Scissors
