import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.498 21.865a.997.997 0 0 0 .998.003L12 18.152l6.504 3.716a.996.996 0 0 0 .998-.003A1 1 0 0 0 20 21V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 .498.865zm6.169-13.198L12 6l1.333 2.667L16 9l-2.223 1.889.89 3.111L12 12.222 9.333 14l.89-3.111L8 9l2.667-.333z" key="k0" />
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
