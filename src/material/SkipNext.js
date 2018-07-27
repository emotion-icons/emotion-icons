import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" key="k0" />
]


const SkipNext = ({ title, ...restProps }) => {
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
          ? [<title key="SkipNext-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SkipNext',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SkipNext.displayName = 'SkipNext'

SkipNext.defaultProps = { height: 24, width: 24}

export default SkipNext
