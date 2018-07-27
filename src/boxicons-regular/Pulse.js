import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.832 8.445a1.001 1.001 0 0 0-1.7.058l-2.891 5.058-3.293-9.877a.987.987 0 0 0-.986-.683 1 1 0 0 0-.932.756L5.219 11H2v2h4c.459 0 .858-.313.97-.757l1.168-4.668 2.914 8.742a.999.999 0 0 0 1.816.179l3.197-5.595 1.103 1.654c.186.278.498.445.832.445h4v-2h-3.465l-1.703-2.555z" key="k0" />
]


const Pulse = ({ title, ...restProps }) => {
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
          ? [<title key="Pulse-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pulse',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pulse.displayName = 'Pulse'

Pulse.defaultProps = { height: 24, width: 24}

export default Pulse
