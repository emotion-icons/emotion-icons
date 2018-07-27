import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M1.5 0h21A1.5 1.5 0 0 1 24 1.5v21a1.5 1.5 0 0 1-1.5 1.5h-21A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0zM3 3v18h18V3H3zm2.4 10.8h2.4v4.8H5.4v-4.8zM9 9h2.4v9.6H9V9zm3.6 2.4H15v7.2h-2.4v-7.2zm3.599-6h2.4v13.2h-2.4V5.4z" key="k0" />
]

export const hex='#C50000'
const Quantopian = ({ title, ...restProps }) => {
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
          ? [<title key="Quantopian-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Quantopian',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Quantopian.displayName = 'Quantopian'

Quantopian.defaultProps = { height: 24, width: 24}

export default Quantopian
