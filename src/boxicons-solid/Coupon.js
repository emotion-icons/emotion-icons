import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1c.827 0 1.5.673 1.5 1.5S3.827 14 3 14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1c-.827 0-1.5-.673-1.5-1.5S20.173 11 21 11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM11 17H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V7h2v2z" key="k0" />
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
