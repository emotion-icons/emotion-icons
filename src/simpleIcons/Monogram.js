import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M23.158 0v23.503c0 .451-.533.668-.83.338L12 12.38 3.301 2.73.842 0h22.316zM11.029 13.46L1.672 23.841c-.297.33-.83.111-.83-.338V0l10.187 13.46z" key="k0" />
]

export const hex='#FDB22A'
const Monogram = ({ title, ...restProps }) => {
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
          ? [<title key="Monogram-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Monogram',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Monogram.displayName = 'Monogram'

Monogram.defaultProps = { height: 24, width: 24}

export default Monogram
