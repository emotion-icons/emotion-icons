import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" key="k0" />
]


const SkipPrevious = ({ title, ...restProps }) => {
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
          ? [<title key="SkipPrevious-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SkipPrevious',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SkipPrevious.displayName = 'SkipPrevious'

SkipPrevious.defaultProps = { height: 24, width: 24}

export default SkipPrevious
