import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M480 176H272v.1h-32v-.1H32v48h11l5 21.5C64 313 88.5 336 144 336s96-17.4 96-90.5V224s1.5-16 16-16 16 16 16 16v21.8c0 73 42.1 90.2 97 90.2s79-25 95-90.2l5-21.8h11v-48z" key="k0" />
]


const Glasses = ({ title, ...restProps }) => {
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
          ? [<title key="Glasses-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Glasses',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Glasses.displayName = 'Glasses'

Glasses.defaultProps = { height: undefined, width: undefined}

export default Glasses
