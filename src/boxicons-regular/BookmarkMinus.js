import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 9h8v2H8z" key="k0" />
,
<path d="M19 22a.998.998 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1.001 1.001 0 0 0 1.496.868L12 18.152l6.504 3.716A.996.996 0 0 0 19 22zm-1-2.723l-5.504-3.145a.999.999 0 0 0-.992 0L6 19.277V4h12v15.277z" key="k1" />
]


const BookmarkMinus = ({ title, ...restProps }) => {
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
          ? [<title key="BookmarkMinus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BookmarkMinus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BookmarkMinus.displayName = 'BookmarkMinus'

BookmarkMinus.defaultProps = { height: 24, width: 24}

export default BookmarkMinus
