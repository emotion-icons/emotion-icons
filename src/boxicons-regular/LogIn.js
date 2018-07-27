import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 12l-4-4v3H5v2h7v3z" key="k0" />
,
<path d="M20 4a1 1 0 0 0-1-1h-7v2h6v14h-6v2h7a1 1 0 0 0 1-1V4z" key="k1" />
]


const LogIn = ({ title, ...restProps }) => {
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
          ? [<title key="LogIn-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LogIn',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LogIn.displayName = 'LogIn'

LogIn.defaultProps = { height: 24, width: 24}

export default LogIn
