import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 10c-1.085 0-2 .915-2 2s.915 2 2 2 2-.915 2-2-.915-2-2-2z" key="k0" />
,
<path d="M16 6H8c-3.296 0-5.982 2.682-6 5.986v.042A6.01 6.01 0 0 0 8 18h8a6.01 6.01 0 0 0 6-5.994V11.988C21.985 8.685 19.297 6 16 6zm0 10H8a4.006 4.006 0 0 1-4-3.99C4.004 9.799 5.798 8 8 8h8c2.202 0 3.996 1.799 4 4.006A4.007 4.007 0 0 1 16 16z" key="k1" />
]


const ToggleLeft = ({ title, ...restProps }) => {
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
          ? [<title key="ToggleLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ToggleLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ToggleLeft.displayName = 'ToggleLeft'

ToggleLeft.defaultProps = { height: 24, width: 24}

export default ToggleLeft
