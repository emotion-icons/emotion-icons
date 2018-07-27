import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10.839 23.972C4.76 23.388 0 18.257 0 12.028c0-6.623 5.377-12 12-12s12 5.377 12 12c0 6.23-4.76 11.359-10.839 11.943v-7.046A5.033 5.033 0 0 0 12 6.995a5.034 5.034 0 0 0-1.162 9.93l.001 7.047zm-.388-14.655a1.162 1.162 0 0 1 0 2.324 1.161 1.161 0 0 1 0-2.324z" key="k0" />
]

export const hex='#FA4B32'
const Everplaces = ({ title, ...restProps }) => {
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
          ? [<title key="Everplaces-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Everplaces',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Everplaces.displayName = 'Everplaces'

Everplaces.defaultProps = { height: 24, width: 24}

export default Everplaces
