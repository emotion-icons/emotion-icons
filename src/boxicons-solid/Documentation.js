import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 22h14a1 1 0 0 0 1-1V3.001a1 1 0 0 0-1-1H6c-1.206 0-3 .799-3 3v14C3.001 21.201 4.794 22 6 22zM8 6h9v2.001H8V6zm11 12v2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H19z" key="k0" />
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
