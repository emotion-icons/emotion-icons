import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M0 32v448h448V32H0zm358.4 179.2h-89.6v89.6h-89.6v89.6H89.6V121.6h268.8v89.6z" key="k0" />
]


const Flipboard = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Flipboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flipboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flipboard.displayName = 'Flipboard'

Flipboard.defaultProps = { height: undefined, width: undefined}

export default Flipboard
