import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 10v7a1 1 0 0 0 1 1h8v-2H7v-6h3L6 6l-4 4h3zm14-3a1 1 0 0 0-1-1h-8v2h7v6h-3l3.969 4L22 14h-3V7z" key="k0" />
]


const Repost = ({ title, ...restProps }) => {
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
          ? [<title key="Repost-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Repost',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Repost.displayName = 'Repost'

Repost.defaultProps = { height: 24, width: 24}

export default Repost
