import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M6 8L2 5v2H0v2h2v2l4-3z" key="k0" />
]


const ArrowSmallRight = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowSmallRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 6 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowSmallRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowSmallRight.displayName = 'ArrowSmallRight'

ArrowSmallRight.defaultProps = { height: 16, width: 6}

export default ArrowSmallRight
