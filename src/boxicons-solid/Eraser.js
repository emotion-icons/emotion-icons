import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.707 9.293l-7-7a.999.999 0 0 0-1.414 0l-11 11a.999.999 0 0 0 0 1.414l5 5A.996.996 0 0 0 8 20h11v-2h-4.586l7.293-7.293a.999.999 0 0 0 0-1.414zM11.586 18H8.414l-4-4L10 8.414 15.586 14l-4 4z" key="k0" />
]


const Eraser = ({ title, ...restProps }) => {
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
          ? [<title key="Eraser-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Eraser',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Eraser.displayName = 'Eraser'

Eraser.defaultProps = { height: 24, width: 24}

export default Eraser
