import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z" key="k0" />
]


const WindowMinimize = ({ title, ...restProps }) => {
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
          ? [<title key="WindowMinimize-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WindowMinimize',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WindowMinimize.displayName = 'WindowMinimize'

WindowMinimize.defaultProps = { height: undefined, width: undefined}

export default WindowMinimize
