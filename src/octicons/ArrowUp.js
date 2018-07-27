import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M5 3L0 9h3v4h4V9h3L5 3z" key="k0" />
]


const ArrowUp = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 10 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowUp.displayName = 'ArrowUp'

ArrowUp.defaultProps = { height: 16, width: 10}

export default ArrowUp
