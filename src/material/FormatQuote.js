import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" key="k0" />
]


const FormatQuote = ({ title, ...restProps }) => {
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
          ? [<title key="FormatQuote-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FormatQuote',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FormatQuote.displayName = 'FormatQuote'

FormatQuote.defaultProps = { height: 24, width: 24}

export default FormatQuote
