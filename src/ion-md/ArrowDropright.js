import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M192 128l128 128-128 128z" key="k0" />
]


const ArrowDropright = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowDropright-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowDropright',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowDropright.displayName = 'ArrowDropright'

ArrowDropright.defaultProps = { height: undefined, width: undefined}

export default ArrowDropright
