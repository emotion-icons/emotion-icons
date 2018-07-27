import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 16c0-2.408 1.564-5 5-5 2.508 0 4.471 1.326 5.404 2.938L14.343 16H20v-5.657l-2.146 2.146C16.518 10.511 14.089 9 11 9c-4.596 0-7 3.521-7 7h2z" key="k0" />
]


const Redo = ({ title, ...restProps }) => {
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
          ? [<title key="Redo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Redo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Redo.displayName = 'Redo'

Redo.defaultProps = { height: 24, width: 24}

export default Redo
