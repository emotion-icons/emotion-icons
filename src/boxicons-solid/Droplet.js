import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.58 2.186a.996.996 0 0 0-1.159 0C11.116 2.401 3.967 7.56 4 14c0 4.411 3.589 8 8 8s8-3.589 8-7.995c.032-6.445-7.116-11.604-7.42-11.819zM12 19c-2.757 0-5-2.243-5-5h2c0 1.654 1.346 3 3 3v2z" key="k0" />
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
