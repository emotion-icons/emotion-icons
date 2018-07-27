import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M408 32H177.531C88.948 32 16.045 103.335 16 191.918 15.956 280.321 87.607 352 176 352v104c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h32v344c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V112h40c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24z" key="k0" />
]


const Paragraph = ({ title, ...restProps }) => {
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
          ? [<title key="Paragraph-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
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

Paragraph.defaultProps = { height: undefined, width: undefined}

export default Paragraph
