import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.997 24L1.605 17.997v-12L12 0l10.396 5.997L16.5 9.402 12 6.8 7.496 9.4v5.2l4.502 2.6 4.5-2.6 5.895 3.397L12.003 24h-.006z" key="k0" />
]

export const hex='#4574E0'
const Codio = ({ title, ...restProps }) => {
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
          ? [<title key="Codio-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Codio',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Codio.displayName = 'Codio'

Codio.defaultProps = { height: 24, width: 24}

export default Codio
