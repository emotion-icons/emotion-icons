import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v3h20V5a1 1 0 0 0-1-1zM2 19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7H2v7zm4-5h6v2H6v-2z" key="k0" />
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
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CreditCard.displayName = 'CreditCard'

CreditCard.defaultProps = { height: 24, width: 24}

export default CreditCard
