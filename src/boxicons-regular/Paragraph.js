import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 20V6h3V4h-8c-4.383 0-7 2.243-7 6 0 3.46 2.225 5.632 6 5.953V20h2V6h2v14h2zM6 10c0-2.831 1.994-3.744 4-3.949v7.898C7.994 13.744 6 12.831 6 10z" key="k0" />
]


const Paragraph = ({ title, ...restProps }) => {
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
          ? [<title key="Paragraph-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Paragraph',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Paragraph.displayName = 'Paragraph'

Paragraph.defaultProps = { height: 24, width: 24}

export default Paragraph
