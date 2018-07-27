import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 7.106c2.25.478 4 2.525 4 4.894 0 1.416-.501 2.683-1.411 3.569l1.395 1.433C18.284 15.736 19 13.96 19 12c0-3.455-2.66-6.413-6-6.917V2L9 6l4 4V7.106zm-1.902 11.826v2.947l4-4-4-4v3.027C8.802 16.466 7 14.402 7 12c0-1.416.501-2.684 1.411-3.57L7.017 6.997C5.716 8.263 5 10.04 5 12c0 3.489 2.712 6.473 6.098 6.932z" key="k0" />
]


const Sync = ({ title, ...restProps }) => {
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
          ? [<title key="Sync-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Sync',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Sync.displayName = 'Sync'

Sync.defaultProps = { height: 24, width: 24}

export default Sync
