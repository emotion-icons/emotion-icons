import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M384 32h-64l-80.7 192h-94.5L64 32H0l48 112H0v48h68.5l13.8 32H0v48h102.8L192 480l89.2-208H384v-48h-82.3l13.8-32H384v-48h-48l48-112zM192 336l-27-64h54l-27 64z" key="k0" />
]


const Viacoin = ({ title, ...restProps }) => {
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
          ? [<title key="Viacoin-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 384 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Viacoin',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Viacoin.displayName = 'Viacoin'

Viacoin.defaultProps = { height: undefined, width: undefined}

export default Viacoin
