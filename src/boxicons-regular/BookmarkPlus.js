import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" key="k0" />
,
<path d="M20 3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1.496.868L12 18.152l6.504 3.716a.996.996 0 0 0 .998-.003A1 1 0 0 0 20 21V3zm-2 16.277l-5.504-3.145a.996.996 0 0 0-.992 0L6 19.277V4h12v15.277z" key="k1" />
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
