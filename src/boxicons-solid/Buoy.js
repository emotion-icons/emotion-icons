import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4.264 14h3.16A5.02 5.02 0 0 0 10 16.576v3.161A8.015 8.015 0 0 1 4.264 14zM10 4.263v3.161A5.02 5.02 0 0 0 7.424 10h-3.16A8.015 8.015 0 0 1 10 4.263zM12 15c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm2 1.576A5.02 5.02 0 0 0 16.576 14h3.16A8.018 8.018 0 0 1 14 19.737v-3.161zM16.576 10A5.02 5.02 0 0 0 14 7.424V4.263A8.015 8.015 0 0 1 19.736 10h-3.16z" key="k0" />
]


const Buoy = ({ title, ...restProps }) => {
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
          ? [<title key="Buoy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Buoy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Buoy.displayName = 'Buoy'

Buoy.defaultProps = { height: 24, width: 24}

export default Buoy
