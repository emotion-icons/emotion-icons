import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 10c-1.085 0-2 .915-2 2s.915 2 2 2 2-.915 2-2-.915-2-2-2z" key="k0" />
,
<path d="M16 6H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18h8c3.309 0 6-2.691 6-6s-2.691-6-6-6zm0 10H8a4.006 4.006 0 0 1-4-3.99C4.004 9.799 5.798 8 8 8h8c2.206 0 4 1.794 4 4s-1.794 4-4 4z" key="k1" />
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
