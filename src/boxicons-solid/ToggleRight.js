import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 6H8c-3.296 0-5.982 2.682-6 5.986V12.028A6.01 6.01 0 0 0 8 18h8c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 9c-1.627 0-3-1.373-3-3s1.373-3 3-3 3 1.373 3 3-1.373 3-3 3z" key="k0" />
]


const ToggleRight = ({ title, ...restProps }) => {
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
          ? [<title key="ToggleRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ToggleRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ToggleRight.displayName = 'ToggleRight'

ToggleRight.defaultProps = { height: 24, width: 24}

export default ToggleRight
