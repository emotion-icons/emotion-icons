import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={22} height={16} x={1} y={4} rx={2} ry={2} key="k0" />
,
<line x1={1} x2={23} y1={10} y2={10} key="k1" />
]


const CreditCard = ({ title, ...restProps }) => {
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
          ? [<title key="CreditCard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CreditCard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

CreditCard.displayName = 'CreditCard'

CreditCard.defaultProps = { height: 24, width: 24}

export default CreditCard
