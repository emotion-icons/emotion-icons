import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 18h12v2H6zM18 4h-2v6c0 2.206-1.794 4-4 4s-4-1.794-4-4V4H6v6c0 3.309 2.691 6 6 6s6-2.691 6-6V4z" key="k0" />
]


const Underline = ({ title, ...restProps }) => {
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
          ? [<title key="Underline-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Underline',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Underline.displayName = 'Underline'

Underline.defaultProps = { height: 24, width: 24}

export default Underline
