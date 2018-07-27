import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M249.6 402V110L32 256l217.6 146zm12.8-146L480 402V110L262.4 256z" key="k0" />
]


const Rewind = ({ title, ...restProps }) => {
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
          ? [<title key="Rewind-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Rewind',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Rewind.displayName = 'Rewind'

Rewind.defaultProps = { height: undefined, width: undefined}

export default Rewind
