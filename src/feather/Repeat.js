import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="17 1 21 5 17 9" key="k0" />
,
<path d="M3 11V9a4 4 0 0 1 4-4h14" key="k1" />
,
<polyline points="7 23 3 19 7 15" key="k2" />
,
<path d="M21 13v2a4 4 0 0 1-4 4H3" key="k3" />
]


const Repeat = ({ title, ...restProps }) => {
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
          ? [<title key="Repeat-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Repeat',
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

Repeat.displayName = 'Repeat'

Repeat.defaultProps = { height: 24, width: 24}

export default Repeat
