import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 12l-4-4v3H8v2h7v3z" key="k0" />
,
<path d="M4 4v16a1 1 0 0 0 1 1h7v-2H6V5h6V3H5a1 1 0 0 0-1 1z" key="k1" />
]


const LogOut = ({ title, ...restProps }) => {
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
          ? [<title key="LogOut-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LogOut',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LogOut.displayName = 'LogOut'

LogOut.defaultProps = { height: 24, width: 24}

export default LogOut
