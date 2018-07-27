import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3.572 5.572l4.506 10.813a1 1 0 0 0 .923.615H18c.417 0 .79-.259.937-.648l3-8A1.003 1.003 0 0 0 21 7H6.333l-1.41-3.385A1 1 0 0 0 4 3H2v2h1l.572.572z" key="k0" />
,
<circle cx={10.5} cy={20.5} r={1.5} key="k1" />
,
<circle cx={16.438} cy={20.5} r={1.5} key="k2" />
]


const Cart = ({ title, ...restProps }) => {
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
          ? [<title key="Cart-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cart',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cart.displayName = 'Cart'

Cart.defaultProps = { height: 24, width: 24}

export default Cart
