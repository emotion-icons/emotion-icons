import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="#607D8B" d="M8.55 12zm10.43-1.61z" key="k0" />
,
<path d="M15.49 9.63c-.18-2.79-1.31-5.51-3.43-7.63a12.188 12.188 0 0 0-3.55 7.63c1.28.68 2.46 1.56 3.49 2.63 1.03-1.06 2.21-1.94 3.49-2.63zm-6.5 2.65c-.14-.1-.3-.19-.45-.29.15.11.31.19.45.29zm6.42-.25c-.13.09-.27.16-.4.26.13-.1.27-.17.4-.26zM12 15.45C9.85 12.17 6.18 10 2 10c0 5.32 3.36 9.82 8.03 11.49.63.23 1.29.4 1.97.51.68-.12 1.33-.29 1.97-.51C18.64 19.82 22 15.32 22 10c-4.18 0-7.85 2.17-10 5.45z" key="k1" />
]


const Spa = ({ title, ...restProps }) => {
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
          ? [<title key="Spa-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Spa',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Spa.displayName = 'Spa'

Spa.defaultProps = { height: 24, width: 24}

export default Spa
