import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10.814 23.586c-2.486.814-2.736.686-3.859-2.801l-2.753-8.519c-.653-2.018-2.654-7.455-2.991-8.498C.588 1.829.588 1.723 4.24.534c2.865-.938 2.979-.906 4.02 2.322.84 2.604 1.377 4.699 2.236 7.357l2.344 7.246L20.329 15c1.479-.488 1.973-.465 2.386 1.352l.305 1.373c.344 1.6-.463 2.006-1.317 2.283L10.814 23.58v.006z" key="k0" />
]

export const hex='#3C80CA'
const Lanyrd = ({ title, ...restProps }) => {
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
          ? [<title key="Lanyrd-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Lanyrd',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Lanyrd.displayName = 'Lanyrd'

Lanyrd.defaultProps = { height: 24, width: 24}

export default Lanyrd
