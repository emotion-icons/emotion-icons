import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 8h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm0 5H7v-2h2v2zm8 0h-2v-2h2v2z" key="k0" />
]


const ShoppingBag = ({ title, ...restProps }) => {
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
          ? [<title key="ShoppingBag-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ShoppingBag',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ShoppingBag.displayName = 'ShoppingBag'

ShoppingBag.defaultProps = { height: 24, width: 24}

export default ShoppingBag
