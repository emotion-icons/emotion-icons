import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.884 2.551A1 1 0 0 0 16.99 2H7c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h12a1 1 0 0 0 1-1V7a.98.98 0 0 0-.115-.444l.009-.004-2.01-4.001zM6 5c0-.805.55-.988 1.012-1h9.362l1.005 2H7.012C6.55 5.988 6 5.805 6 5zm10 7H9v-2h7v2z" key="k0" />
]


const Book = ({ title, ...restProps }) => {
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
          ? [<title key="Book-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Book',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Book.displayName = 'Book'

Book.defaultProps = { height: 24, width: 24}

export default Book
