import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" key="k0" />
,
<line x1={12} x2={12} y1={22} y2={15.5} key="k1" />
,
<polyline points="22 8.5 12 15.5 2 8.5" key="k2" />
,
<polyline points="2 15.5 12 8.5 22 15.5" key="k3" />
,
<line x1={12} x2={12} y1={2} y2={8.5} key="k4" />
]


const Codepen = ({ title, ...restProps }) => {
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
          ? [<title key="Codepen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Codepen',
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

Codepen.displayName = 'Codepen'

Codepen.defaultProps = { height: 24, width: 24}

export default Codepen
