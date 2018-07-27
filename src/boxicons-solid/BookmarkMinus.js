import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.498 21.865a1 1 0 0 0 .998.003L12 18.152l6.504 3.716a.996.996 0 0 0 .998-.003A1 1 0 0 0 20 21V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18c0 .356.19.686.498.865zM8 9h8v2H8V9z" key="k0" />
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
