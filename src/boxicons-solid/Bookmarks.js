import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 7v14a1 1 0 0 0 1.515.857L11 19.166l4.485 2.691a1.004 1.004 0 0 0 1.008.013A1 1 0 0 0 17 21V7a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1z" key="k0" />
,
<path d="M21 16V3a1 1 0 0 0-1-1H10v2h9v12h2z" key="k1" />
]


const Bookmarks = ({ title, ...restProps }) => {
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
          ? [<title key="Bookmarks-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bookmarks',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bookmarks.displayName = 'Bookmarks'

Bookmarks.defaultProps = { height: 24, width: 24}

export default Bookmarks
