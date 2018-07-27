import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M4 7V5H2v2H0l3 4 3-4H4z" key="k0" />
]


const ArrowSmallDown = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowSmallDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 6 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowSmallDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowSmallDown.displayName = 'ArrowSmallDown'

ArrowSmallDown.defaultProps = { height: 16, width: 6}

export default ArrowSmallDown
