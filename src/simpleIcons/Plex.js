import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.643 0H4.68l7.679 12L4.68 24h6.963l7.677-12-7.677-12" key="k0" />
]

export const hex='#E5A00D'
const Plex = ({ title, ...restProps }) => {
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
          ? [<title key="Plex-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Plex',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Plex.displayName = 'Plex'

Plex.defaultProps = { height: 24, width: 24}

export default Plex
