import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.519 19.876a.993.993 0 0 0 1.018-.032l11-7a1.002 1.002 0 0 0 0-1.688l-11-7A.999.999 0 0 0 6 5v14c0 .365.199.701.519.876z" key="k0" />
]


const RightArrow = ({ title, ...restProps }) => {
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
          ? [<title key="RightArrow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RightArrow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RightArrow.displayName = 'RightArrow'

RightArrow.defaultProps = { height: 24, width: 24}

export default RightArrow
