import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M32 384h272v32H32zm368 0h80v32h-80zm-16 63.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95zM32 240h80v32H32zm176 0h272v32H208zm-16 63.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95zM32 96h272v32H32zm368 0h80v32h-80zm-16 63.5c0 17.949-14.327 32.5-32 32.5-17.673 0-32-14.551-32-32.5v-95c0-17.949 14.327-32.5 32-32.5 17.673 0 32 14.551 32 32.5v95z" key="k0" />
]


const Options = ({ title, ...restProps }) => {
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
          ? [<title key="Options-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Options',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Options.displayName = 'Options'

Options.defaultProps = { height: undefined, width: undefined}

export default Options
