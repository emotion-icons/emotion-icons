import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-1c0-3.714-2.261-6.907-5.478-8.281A5.492 5.492 0 0 0 17.5 7.5C17.5 4.468 15.032 2 12 2a5.506 5.506 0 0 0-5.5 5.5c0 1.693.771 3.209 1.978 4.219C5.261 13.093 3 16.287 3 20z" key="k0" />
]


const User = ({ title, ...restProps }) => {
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
          ? [<title key="User-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-User',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

User.displayName = 'User'

User.defaultProps = { height: 24, width: 24}

export default User
