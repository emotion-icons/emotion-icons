import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.604 8.4h-3.405V12h3.405a1.8 1.8 0 1 0 0-3.6z" key="k0" />
,
<path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm1.604 14.4h-3.405V18H7.801V6h5.804a4.2 4.2 0 1 1-.001 8.4z" key="k1" />
]

export const hex='#DA552F'
const ProductHunt = ({ title, ...restProps }) => {
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
          ? [<title key="ProductHunt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ProductHunt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ProductHunt.displayName = 'ProductHunt'

ProductHunt.defaultProps = { height: 24, width: 24}

export default ProductHunt
