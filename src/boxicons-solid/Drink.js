import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 3H4a1 1 0 0 0-.809 1.588L11 15.325V20H8v2h8v-2h-3v-4.675l7.809-10.737A1 1 0 1 0 20 3zm-4.146 5H8.146L5.964 5h12.072l-2.182 3z" key="k0" />
]


const Drink = ({ title, ...restProps }) => {
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
          ? [<title key="Drink-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Drink',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Drink.displayName = 'Drink'

Drink.defaultProps = { height: 24, width: 24}

export default Drink
