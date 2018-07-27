import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 12a3.99 3.99 0 0 0 3-1.357c.733.832 1.807 1.357 3 1.357s2.267-.525 3-1.357A3.99 3.99 0 0 0 18 12c2.206 0 4-1.794 4-4a.995.995 0 0 0-.143-.515l-3-5A1 1 0 0 0 18 2H6a1 1 0 0 0-.857.485l-3 5A.995.995 0 0 0 2 8c0 2.206 1.794 4 4 4zm10-8l1 4h-2l-1-4h2zM8 4h2L9 8c0-.012 0-.006 0 0H7l1-4zm7 8.643c-.733.832-1.807 1.357-3 1.357s-2.267-.525-3-1.357A3.99 3.99 0 0 1 6 14c-1.2 0-2.267-.542-3-1.382V21a1 1 0 0 0 1 1h5.006v-5h6v5H20a1 1 0 0 0 1-1v-8.382A3.974 3.974 0 0 1 18 14a3.99 3.99 0 0 1-3-1.357z" key="k0" />
]


const Store = ({ title, ...restProps }) => {
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
          ? [<title key="Store-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Store',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Store.displayName = 'Store'

Store.defaultProps = { height: 24, width: 24}

export default Store
