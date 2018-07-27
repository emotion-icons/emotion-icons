import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1c.827 0 1.5.673 1.5 1.5S3.827 14 3 14a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1c-.827 0-1.5-.673-1.5-1.5S20.173 11 21 11a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 4.146c-1.444.432-2.5 1.771-2.5 3.354s1.056 2.923 2.5 3.354V17H4v-1.146c1.444-.432 2.5-1.771 2.5-3.354S5.444 9.577 4 9.146V7h16v2.146z" key="k0" />
,
<circle cx={9} cy={10} r={1} key="k1" />
,
<circle cx={15} cy={14} r={1} key="k2" />
,
<path d="M14.832 9.555l-4 6-1.664-1.11 4-6z" key="k3" />
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
