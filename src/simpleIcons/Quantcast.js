import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.11 20.474A10.024 10.024 0 0 0 19.737 12c0-5.523-4.419-10-9.869-10S0 6.477 0 12s4.418 10 9.868 10H24v-1.526h-8.89z" key="k0" />
]

export const hex='#1E262C'
const Quantcast = ({ title, ...restProps }) => {
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
          ? [<title key="Quantcast-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Quantcast',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Quantcast.displayName = 'Quantcast'

Quantcast.defaultProps = { height: 24, width: 24}

export default Quantcast
