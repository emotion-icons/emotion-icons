import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 7c0-.156-.043-.3-.106-.432l.006-.003-1.928-4a.998.998 0 0 0-.9-.565H7c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h12a1 1 0 0 0 1-1V7zM7 4h9.444l.964 2H7.012C6.55 5.988 6 5.806 6 5s.55-.988 1-1zm11 16H7.012C6.55 19.988 6 19.806 6 19V8h6v6l2-1 2 1V8h2v12z" key="k0" />
]


const BookBookmark = ({ title, ...restProps }) => {
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
          ? [<title key="BookBookmark-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BookBookmark',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BookBookmark.displayName = 'BookBookmark'

BookBookmark.defaultProps = { height: 24, width: 24}

export default BookBookmark
