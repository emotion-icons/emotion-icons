import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.707 2.293a.999.999 0 0 0-1.414 0l-13 13a1.003 1.003 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l13-13a.999.999 0 0 0 0-1.414l-3-3zM7.488 18.097l-2.114.528.529-2.114L15 7.414 16.586 9l-9.098 9.097zM18 7.586L16.414 6 18 4.414 19.586 6 18 7.586z" key="k0" />
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
