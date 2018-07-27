import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10 9V3H8v5H3v2h6a1 1 0 0 0 1-1zM8 21h2v-6a1 1 0 0 0-1-1H3v2h5v5zm13-7h-6a1 1 0 0 0-1 1v6h2v-5h5v-2zm0-6h-5V3h-2v6a1 1 0 0 0 1 1h6V8z" key="k0" />
]


const ExitFullscreen = ({ title, ...restProps }) => {
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
          ? [<title key="ExitFullscreen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ExitFullscreen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ExitFullscreen.displayName = 'ExitFullscreen'

ExitFullscreen.defaultProps = { height: 24, width: 24}

export default ExitFullscreen
