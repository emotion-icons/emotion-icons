import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 32C192 32 96 165.2 96 288.9 96 412.6 160 480 256 480s160-67.4 160-191.1C416 165.2 320 32 256 32z" key="k0" />
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
