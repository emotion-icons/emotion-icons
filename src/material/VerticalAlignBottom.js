import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z" key="k0" />
]


const VerticalAlignBottom = ({ title, ...restProps }) => {
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
          ? [<title key="VerticalAlignBottom-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VerticalAlignBottom',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VerticalAlignBottom.displayName = 'VerticalAlignBottom'

VerticalAlignBottom.defaultProps = { height: 24, width: 24}

export default VerticalAlignBottom
