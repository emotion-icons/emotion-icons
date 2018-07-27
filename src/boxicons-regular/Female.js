import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.5 8.5C18.5 4.916 15.584 2 12 2S5.5 4.916 5.5 8.5c0 3.243 2.39 5.932 5.5 6.415V17H8v2h3v2.988h2V19h3v-2h-3v-2.085c3.109-.483 5.5-3.172 5.5-6.415zm-11 0C7.5 6.019 9.519 4 12 4s4.5 2.019 4.5 4.5a4.505 4.505 0 0 1-4.495 4.5h-.01A4.505 4.505 0 0 1 7.5 8.5z" key="k0" />
]


const Female = ({ title, ...restProps }) => {
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
          ? [<title key="Female-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Female',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Female.displayName = 'Female'

Female.defaultProps = { height: 24, width: 24}

export default Female
