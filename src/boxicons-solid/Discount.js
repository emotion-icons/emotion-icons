import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1c.827 0 1.5.673 1.5 1.5S3.827 14 3 14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1c-.827 0-1.5-.673-1.5-1.5S20.173 11 21 11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM8 10a1 1 0 1 1 2 0 1 1 0 1 1-2 0zm1.168 4.445l4-6 1.664 1.109-4 6-1.664-1.109zM15 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" key="k0" />
]


const Discount = ({ title, ...restProps }) => {
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
          ? [<title key="Discount-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Discount',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Discount.displayName = 'Discount'

Discount.defaultProps = { height: 24, width: 24}

export default Discount
