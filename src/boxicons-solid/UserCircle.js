import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 1.945C6.55 1.945 1.945 6.55 1.945 12S6.55 22.055 12 22.055 22.055 17.45 22.055 12 17.45 1.945 12 1.945zM12 7c1.727 0 3 1.272 3 3s-1.273 3-3 3c-1.726 0-3-1.272-3-3s1.274-3 3-3zm0 7c2.234 0 3.883 1.365 4.598 3.293-1.246 1.089-2.858 1.762-4.598 1.762s-3.352-.673-4.598-1.762C8.117 15.364 9.766 14 12 14z" key="k0" />
]


const UserCircle = ({ title, ...restProps }) => {
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
          ? [<title key="UserCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UserCircle.displayName = 'UserCircle'

UserCircle.defaultProps = { height: 24, width: 24}

export default UserCircle
