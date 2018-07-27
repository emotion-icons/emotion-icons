import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M0 8c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z" key="k0" />
]


const PrimitiveDot = ({ title, ...restProps }) => {
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
          ? [<title key="PrimitiveDot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 8 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PrimitiveDot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PrimitiveDot.displayName = 'PrimitiveDot'

PrimitiveDot.defaultProps = { height: 16, width: 8}

export default PrimitiveDot
