import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M8 12H0V4h8v8z" key="k0" />
]


const PrimitiveSquare = ({ title, ...restProps }) => {
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
          ? [<title key="PrimitiveSquare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 8 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PrimitiveSquare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PrimitiveSquare.displayName = 'PrimitiveSquare'

PrimitiveSquare.defaultProps = { height: 16, width: 8}

export default PrimitiveSquare
