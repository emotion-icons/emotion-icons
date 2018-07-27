import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1c.827 0 1.5.673 1.5 1.5S3.827 14 3 14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1c-.827 0-1.5-.673-1.5-1.5S20.173 11 21 11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 4.146c-1.444.432-2.5 1.771-2.5 3.354s1.056 2.923 2.5 3.354V17h-9v-2H9v2H4v-1.146c1.444-.432 2.5-1.771 2.5-3.354S5.444 9.577 4 9.146V7h5v2h2V7h9v2.146z" key="k0" />
,
<path d="M9 11h2v2H9z" key="k1" />
]


const Coupon = ({ title, ...restProps }) => {
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
          ? [<title key="Coupon-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Coupon',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Coupon.displayName = 'Coupon'

Coupon.defaultProps = { height: 24, width: 24}

export default Coupon
