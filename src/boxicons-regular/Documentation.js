import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 2c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H6zM5 5c0-.806.55-.988 1-1h13v12H5V5zm1.012 15C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H19v2H6.012z" key="k0" />
,
<path d="M8 6h8.908v2H8z" key="k1" />
]


const Documentation = ({ title, ...restProps }) => {
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
          ? [<title key="Documentation-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Documentation',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Documentation.displayName = 'Documentation'

Documentation.defaultProps = { height: 24, width: 24}

export default Documentation
