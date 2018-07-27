import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M352 384h108.4C417 455.9 338.1 504 248 504S79 455.9 35.6 384H144V256.2L248 361l104-105v128zM88 336V128l159.4 159.4L408 128v208h74.8c8.5-25.1 13.2-52 13.2-80C496 119 385 8 248 8S0 119 0 256c0 28 4.6 54.9 13.2 80H88z" key="k0" />
]


const Monero = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Monero-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 496 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Monero',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Monero.displayName = 'Monero'

Monero.defaultProps = { height: undefined, width: undefined}

export default Monero
