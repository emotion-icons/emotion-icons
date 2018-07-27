import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 17a1 1 0 0 0 1 1h3.586l-2.293 2.293 1.414 1.414L11.414 18h1.172l3.707 3.707 1.414-1.414L15.414 18H19a1 1 0 0 0 1-1V6h2V4h-9V2h-2v2H2v2h2v11zM6 6h12v10H6V6z" key="k0" />
]


const Chalkboard = ({ title, ...restProps }) => {
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
          ? [<title key="Chalkboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Chalkboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Chalkboard.displayName = 'Chalkboard'

Chalkboard.defaultProps = { height: 24, width: 24}

export default Chalkboard
