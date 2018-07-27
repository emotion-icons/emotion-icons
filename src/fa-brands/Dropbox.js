import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z" key="k0" />
]


const Dropbox = ({ title, ...restProps }) => {
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
          ? [<title key="Dropbox-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 528 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dropbox',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dropbox.displayName = 'Dropbox'

Dropbox.defaultProps = { height: undefined, width: undefined}

export default Dropbox
