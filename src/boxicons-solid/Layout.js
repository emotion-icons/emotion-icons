import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4h18V4zM4 21h10V10H3v10a1 1 0 0 0 1 1zm17-1V10h-5v11h4a1 1 0 0 0 1-1z" key="k0" />
]


const Layout = ({ title, ...restProps }) => {
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
          ? [<title key="Layout-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Layout',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Layout.displayName = 'Layout'

Layout.defaultProps = { height: 24, width: 24}

export default Layout
