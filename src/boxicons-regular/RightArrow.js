import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 20a1 1 0 0 0 .537-.156l11-7a1.002 1.002 0 0 0 0-1.688l-11-7A.999.999 0 0 0 6 5v14a.998.998 0 0 0 1 1zM8 6.822L16.138 12 8 17.178V6.822z" key="k0" />
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
