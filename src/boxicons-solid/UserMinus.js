import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14 11h8v2h-8zm-3.076 1.771C11.594 12.063 12 11.1 12 10c0-2.28-1.72-4-4-4s-4 1.72-4 4c0 1.1.406 2.063 1.076 2.771C3.212 13.849 2 15.96 2 18.5v.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-.5c0-2.54-1.212-4.651-3.076-5.729z" key="k0" />
]


const UserMinus = ({ title, ...restProps }) => {
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
          ? [<title key="UserMinus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserMinus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UserMinus.displayName = 'UserMinus'

UserMinus.defaultProps = { height: 24, width: 24}

export default UserMinus
