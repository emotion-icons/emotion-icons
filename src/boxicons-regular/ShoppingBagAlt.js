import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 15H4V6h16v13z" key="k0" />
,
<path d="M12 14c3.309 0 6-2.691 6-6h-2c0 2.206-1.794 4-4 4s-4-1.794-4-4H6c0 3.309 2.691 6 6 6z" key="k1" />
]


const ShoppingBagAlt = ({ title, ...restProps }) => {
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
          ? [<title key="ShoppingBagAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ShoppingBagAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ShoppingBagAlt.displayName = 'ShoppingBagAlt'

ShoppingBagAlt.defaultProps = { height: 24, width: 24}

export default ShoppingBagAlt
