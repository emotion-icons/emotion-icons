import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 12H4c0 4.336 3.663 8 8 8s8-3.664 8-8-3.663-8-8-8V2L8.025 5 12 8V6c3.252 0 6 2.748 6 6s-2.748 6-6 6-6-2.748-6-6z" key="k0" />
,
<path d="M15 12c0-1.669-1.329-3-3-3s-3 1.331-3 3 1.329 3 3 3 3-1.331 3-3z" key="k1" />
]


const Reset = ({ title, ...restProps }) => {
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
          ? [<title key="Reset-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Reset',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Reset.displayName = 'Reset'

Reset.defaultProps = { height: 24, width: 24}

export default Reset
