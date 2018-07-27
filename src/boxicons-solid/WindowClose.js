import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5.281 12.281l-1.414 1.414-2.293-2.293-2.293 2.293-1.414-1.414 2.293-2.293-2.293-2.293 1.414-1.414 2.293 2.293 2.293-2.293 1.414 1.414-2.293 2.293 2.293 2.293zM20 8H4V6h16v2z" key="k0" />
]


const WindowClose = ({ title, ...restProps }) => {
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
          ? [<title key="WindowClose-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WindowClose',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WindowClose.displayName = 'WindowClose'

WindowClose.defaultProps = { height: 24, width: 24}

export default WindowClose
