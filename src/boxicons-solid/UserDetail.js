import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zm-3.02 4.701A3.989 3.989 0 0 0 12 9c0-2.28-1.72-4-4-4S4 6.72 4 9c0 1.065.387 1.999 1.02 2.701C3.151 12.657 2 14.54 2 17v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1c0-2.46-1.151-4.343-3.02-5.299z" key="k0" />
]


const UserDetail = ({ title, ...restProps }) => {
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
          ? [<title key="UserDetail-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserDetail',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UserDetail.displayName = 'UserDetail'

UserDetail.defaultProps = { height: 24, width: 24}

export default UserDetail
