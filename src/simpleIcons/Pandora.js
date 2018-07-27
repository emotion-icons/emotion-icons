import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.051 0H4.949C2.25 0 0 2.221 0 4.95v14.101C0 21.75 2.22 24 4.949 24h14.102A4.956 4.956 0 0 0 24 19.051V4.95C24 2.25 21.779 0 19.051 0zm-6.676 15.811h-1.229V18.6a.65.65 0 0 1-.646.646H6.646V4.756H13.2c3.181 0 5.642 1.65 5.642 5.4 0 3.555-2.73 5.654-6.451 5.654h-.016z" key="k0" />
]

export const hex='#005483'
const Pandora = ({ title, ...restProps }) => {
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
          ? [<title key="Pandora-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pandora',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pandora.displayName = 'Pandora'

Pandora.defaultProps = { height: 24, width: 24}

export default Pandora
