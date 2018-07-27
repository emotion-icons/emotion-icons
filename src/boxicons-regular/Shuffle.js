import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 6h-2.414l-3.293 3.293 1.414 1.414L16.414 8H18v3l4-3.937L18 3zm0 11h-1.586l-11-11H2v2h2.586l4.5 4.5-4.5 4.5H2v2h3.414l5.086-5.086L15.586 19H18v3l4-4-4-4z" key="k0" />
]


const Shuffle = ({ title, ...restProps }) => {
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
          ? [<title key="Shuffle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Shuffle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Shuffle.displayName = 'Shuffle'

Shuffle.defaultProps = { height: 24, width: 24}

export default Shuffle
