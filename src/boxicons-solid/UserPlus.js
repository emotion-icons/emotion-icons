import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM3 20h10a1 1 0 0 0 1-1v-.5c0-2.54-1.212-4.651-3.077-5.729C11.593 12.063 12 11.1 12 10c0-2.28-1.72-4-4-4s-4 1.72-4 4c0 1.1.407 2.063 1.077 2.771C3.212 13.849 2 15.96 2 18.5v.5a1 1 0 0 0 1 1z" key="k0" />
]


const UserPlus = ({ title, ...restProps }) => {
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
          ? [<title key="UserPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UserPlus.displayName = 'UserPlus'

UserPlus.defaultProps = { height: 24, width: 24}

export default UserPlus
