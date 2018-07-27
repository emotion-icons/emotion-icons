import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.98 6.938h-.359v10.125h.359V6.938zm-.745 1.125h-.36v7.875h.36V8.063zm-1.116 0H0v7.875h16.119V8.063zm7.881 0h-4.508v7.875H24V8.063zm-5.256 0h-.36v7.875h.36V8.063z" key="k0" />
]

export const hex='#000000'
const Stitcher = ({ title, ...restProps }) => {
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
          ? [<title key="Stitcher-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Stitcher',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Stitcher.displayName = 'Stitcher'

Stitcher.defaultProps = { height: 24, width: 24}

export default Stitcher
