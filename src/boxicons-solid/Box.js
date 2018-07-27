import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 7.994H3V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.006h-1zM16 15H8v-2h8v2z" key="k0" />
]


const Box = ({ title, ...restProps }) => {
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
          ? [<title key="Box-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Box',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Box.displayName = 'Box'

Box.defaultProps = { height: 24, width: 24}

export default Box
