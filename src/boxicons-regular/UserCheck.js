import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.994 14.997a.996.996 0 0 0 .706-.292l5.006-4.997-1.412-1.416-4.3 4.292-1.292-1.292-1.414 1.414 1.999 1.998a.997.997 0 0 0 .707.293zM3 20h10a1 1 0 0 0 1-1v-.5c0-2.54-1.212-4.651-3.076-5.729C11.594 12.063 12 11.1 12 10c0-2.28-1.72-4-4-4s-4 1.72-4 4c0 1.1.406 2.063 1.076 2.771C3.212 13.849 2 15.96 2 18.5v.5a1 1 0 0 0 1 1zm3-10c0-1.178.822-2 2-2s2 .822 2 2-.822 2-2 2-2-.822-2-2zm2 4c2.43 0 3.788 1.938 3.978 4H4.022c.19-2.062 1.548-4 3.978-4z" key="k0" />
]


const UserCheck = ({ title, ...restProps }) => {
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
          ? [<title key="UserCheck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserCheck',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UserCheck.displayName = 'UserCheck'

UserCheck.defaultProps = { height: 24, width: 24}

export default UserCheck
