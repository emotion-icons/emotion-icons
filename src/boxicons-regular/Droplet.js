import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 22c4.411 0 8-3.589 8-7.995.032-6.445-7.116-11.604-7.42-11.819a.996.996 0 0 0-1.159 0C11.116 2.401 3.967 7.56 4 14c0 4.411 3.589 8 8 8zm.001-17.736C13.612 5.568 18.022 9.545 18 14c0 3.309-2.691 6-6 6s-6-2.691-6-6.005c-.022-4.439 4.39-8.425 6.001-9.731z" key="k0" />
]


const Droplet = ({ title, ...restProps }) => {
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
          ? [<title key="Droplet-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Droplet',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Droplet.displayName = 'Droplet'

Droplet.defaultProps = { height: 24, width: 24}

export default Droplet
