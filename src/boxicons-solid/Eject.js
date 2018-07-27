import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 14h10a1.001 1.001 0 0 0 .814-1.581l-5-7c-.375-.526-1.252-.526-1.627 0l-5 7A1 1 0 0 0 7 14zm-1 2h12v2H6z" key="k0" />
]


const Eject = ({ title, ...restProps }) => {
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
          ? [<title key="Eject-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Eject',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Eject.displayName = 'Eject'

Eject.defaultProps = { height: 24, width: 24}

export default Eject
