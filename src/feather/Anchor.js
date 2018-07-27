import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={5} r={3} key="k0" />
,
<line x1={12} x2={12} y1={22} y2={8} key="k1" />
,
<path d="M5 12H2a10 10 0 0 0 20 0h-3" key="k2" />
]


const Anchor = ({ title, ...restProps }) => {
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
          ? [<title key="Anchor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Anchor',
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

Anchor.displayName = 'Anchor'

Anchor.defaultProps = { height: 24, width: 24}

export default Anchor
