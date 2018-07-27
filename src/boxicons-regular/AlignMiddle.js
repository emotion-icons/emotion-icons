import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 19h18v2H3zm3-4h12v2H6zm-3-4h18v2H3zm0-8h18v2H3zm3 4h12v2H6z" key="k0" />
]


const AlignMiddle = ({ title, ...restProps }) => {
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
          ? [<title key="AlignMiddle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AlignMiddle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AlignMiddle.displayName = 'AlignMiddle'

AlignMiddle.defaultProps = { height: 24, width: 24}

export default AlignMiddle
