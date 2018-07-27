import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6v-2H4V8h16v10h-5v2h6a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" key="k0" />
,
<path d="M13 20v-5h3l-4-4-4 4h3v5z" key="k1" />
]


const WindowOpen = ({ title, ...restProps }) => {
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
          ? [<title key="WindowOpen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WindowOpen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WindowOpen.displayName = 'WindowOpen'

WindowOpen.defaultProps = { height: 24, width: 24}

export default WindowOpen
