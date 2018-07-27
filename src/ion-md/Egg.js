import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 32C185.6 32 80 165.2 80 288.9S150.4 480 256 480s176-67.4 176-191.1S326.4 32 256 32z" key="k0" />
]


const Egg = ({ title, ...restProps }) => {
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
          ? [<title key="Egg-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Egg',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Egg.displayName = 'Egg'

Egg.defaultProps = { height: undefined, width: undefined}

export default Egg
