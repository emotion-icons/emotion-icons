import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 9h-1V2h-2v3H6V2H4v7H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-3-2v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-5h16v5z" key="k0" />
]


const Bed = ({ title, ...restProps }) => {
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
          ? [<title key="Bed-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bed',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bed.displayName = 'Bed'

Bed.defaultProps = { height: 24, width: 24}

export default Bed
