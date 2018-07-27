import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9.333 14L12 12.222 14.667 14l-.89-3.111L16 9l-2.667-.333L12 6l-1.333 2.667L8 9l2.223 1.889z" key="k0" />
,
<path d="M20 21V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1.496.868L12 18.152l6.504 3.716a.996.996 0 0 0 .998-.003A1 1 0 0 0 20 21zm-2-1.723l-5.504-3.145a.996.996 0 0 0-.992 0L6 19.277V4h12v15.277z" key="k1" />
]


const BookmarkStar = ({ title, ...restProps }) => {
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
          ? [<title key="BookmarkStar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BookmarkStar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BookmarkStar.displayName = 'BookmarkStar'

BookmarkStar.defaultProps = { height: 24, width: 24}

export default BookmarkStar
