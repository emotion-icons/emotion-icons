import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1.496.868L12 18.152l6.504 3.716a.996.996 0 0 0 .998-.003A1 1 0 0 0 20 21V3a1 1 0 0 0-1-1H5zm11 9h-3v3h-2v-3H8V9h3V6h2v3h3v2z" key="k0" />
]


const BookmarkPlus = ({ title, ...restProps }) => {
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
          ? [<title key="BookmarkPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BookmarkPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BookmarkPlus.displayName = 'BookmarkPlus'

BookmarkPlus.defaultProps = { height: 24, width: 24}

export default BookmarkPlus
