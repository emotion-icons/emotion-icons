import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 5h5V3H4a1 1 0 0 0-1 1v6h2V5zM4 21h6v-2H5v-5H3v6a1 1 0 0 0 1 1zm17-1v-6h-2v5h-5v2h6a1 1 0 0 0 1-1zM14 5h5v5h2V4a1 1 0 0 0-1-1h-6v2z" key="k0" />
]


const Fullscreen = ({ title, ...restProps }) => {
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
          ? [<title key="Fullscreen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Fullscreen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Fullscreen.displayName = 'Fullscreen'

Fullscreen.defaultProps = { height: 24, width: 24}

export default Fullscreen
