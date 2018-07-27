import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.352 14.585l-4.509 4.614.72-4.062L3.428 7.57 0 7.753 7.58 0v2.953l7.214 6.646 4.513-1.105-4.689 4.982L24 24l-10.648-9.415z" key="k0" />
]

export const hex='#0000FF'
const Pinboard = ({ title, ...restProps }) => {
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
          ? [<title key="Pinboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pinboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pinboard.displayName = 'Pinboard'

Pinboard.defaultProps = { height: 24, width: 24}

export default Pinboard
