import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={3.6} height={3.6} x={10.2} y={20.4} key="k0" />
,
<rect width={6} height={18} x={9} key="k1" />
]

export const hex='#FF3C00'
const Highly = ({ title, ...restProps }) => {
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
          ? [<title key="Highly-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Highly',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Highly.displayName = 'Highly'

Highly.defaultProps = { height: 24, width: 24}

export default Highly
