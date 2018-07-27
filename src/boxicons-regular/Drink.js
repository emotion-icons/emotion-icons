import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.891 3.546A1 1 0 0 0 20 3H4a1 1 0 0 0-.809 1.588L11 15.325V20H8v2h8v-2h-3v-4.675l7.809-10.737a1 1 0 0 0 .082-1.042zM8.873 9h6.254L12 13.3 8.873 9zm7.709-2H7.418L5.964 5h12.072l-1.454 2z" key="k0" />
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
