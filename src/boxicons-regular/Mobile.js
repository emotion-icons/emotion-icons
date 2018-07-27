import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12zM7 4h10v14H7V4z" key="k0" />
]


const Mobile = ({ title, ...restProps }) => {
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
          ? [<title key="Mobile-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mobile',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Mobile.displayName = 'Mobile'

Mobile.defaultProps = { height: 24, width: 24}

export default Mobile
