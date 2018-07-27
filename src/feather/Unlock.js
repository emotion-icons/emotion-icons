import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={18} height={11} x={3} y={11} rx={2} ry={2} key="k0" />
,
<path d="M7 11V7a5 5 0 0 1 9.9-1" key="k1" />
]


const Unlock = ({ title, ...restProps }) => {
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
          ? [<title key="Unlock-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Unlock',
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

Unlock.displayName = 'Unlock'

Unlock.defaultProps = { height: 24, width: 24}

export default Unlock
