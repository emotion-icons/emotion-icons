import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 12h-1v-2c0-4.411-3.589-8-8-8s-8 3.589-8 8v2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-9c0-3.309 2.691-6 6-6s6 2.691 6 6v9a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" key="k0" />
,
<path d="M7 12h2v8H7zm8 0h2v8h-2z" key="k1" />
]


const Headphone = ({ title, ...restProps }) => {
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
          ? [<title key="Headphone-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Headphone',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Headphone.displayName = 'Headphone'

Headphone.defaultProps = { height: 24, width: 24}

export default Headphone
