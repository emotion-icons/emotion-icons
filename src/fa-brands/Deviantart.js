import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M320 93.2l-98.2 179.1 7.4 9.5H320v127.7H159.1l-13.5 9.2-43.7 84c-.3 0-8.6 8.6-9.2 9.2H0v-93.2l93.2-179.4-7.4-9.2H0V102.5h156l13.5-9.2 43.7-84c.3 0 8.6-8.6 9.2-9.2H320v93.1z" key="k0" />
]


const Deviantart = ({ title, ...restProps }) => {
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
          ? [<title key="Deviantart-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 320 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Deviantart',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Deviantart.displayName = 'Deviantart'

Deviantart.defaultProps = { height: undefined, width: undefined}

export default Deviantart
