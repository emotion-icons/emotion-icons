import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H2v2h2.3l3.761 10.342A.998.998 0 0 0 9 16h9v-2H9.7l-.728-2H19c.446 0 .839-.296.962-.726l2-7a1.004 1.004 0 0 0-.163-.877A1.005 1.005 0 0 0 21 3z" key="k0" />
,
<circle cx={10.5} cy={19.5} r={1.5} key="k1" />
,
<circle cx={16.438} cy={19.5} r={1.5} key="k2" />
]


const CartAlt = ({ title, ...restProps }) => {
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
          ? [<title key="CartAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CartAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CartAlt.displayName = 'CartAlt'

CartAlt.defaultProps = { height: 24, width: 24}

export default CartAlt
