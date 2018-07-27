import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.976 9.746a1 1 0 0 0-.804-.734l-5.497-.917-2.772-5.544c-.34-.678-1.449-.678-1.789 0L8.341 8.095l-5.497.917a1 1 0 0 0-.461 1.767l4.48 3.584-1.817 6.36a1.001 1.001 0 0 0 1.517 1.106l5.445-3.63 5.445 3.63a.998.998 0 0 0 1.145-.024c.338-.247.487-.68.372-1.082l-1.817-6.36 4.48-3.584c.307-.247.442-.651.343-1.033zm-6.593 3.471a1.003 1.003 0 0 0-.337 1.056l1.253 4.385-3.736-2.491a.998.998 0 0 0-.555-.168V5.234l2.105 4.211c.144.286.415.486.73.539l3.79.632-3.25 2.601z" key="k0" />
]


const StarHalf = ({ title, ...restProps }) => {
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
          ? [<title key="StarHalf-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-StarHalf',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

StarHalf.displayName = 'StarHalf'

StarHalf.defaultProps = { height: 24, width: 24}

export default StarHalf
