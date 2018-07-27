import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 21c.081 0 .162-.01.242-.03l4-1c.176-.044.337-.135.465-.263L18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464l-1 4A1 1 0 0 0 4 21zM18.707 2.293a.999.999 0 0 0-1.414 0L15 4.586 19.414 9l2.293-2.293a.999.999 0 0 0 0-1.414l-3-3z" key="k0" />
]


const Pencil = ({ title, ...restProps }) => {
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
          ? [<title key="Pencil-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pencil',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pencil.displayName = 'Pencil'

Pencil.defaultProps = { height: 24, width: 24}

export default Pencil
