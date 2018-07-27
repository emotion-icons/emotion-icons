import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.615 0l-5.64 6.54L.529 4.718l8.68 7.372-8.537 7.463 8.411-1.984L14.843 24l.71-8.601 7.918-3.483-7.963-3.33L14.621 0h-.006z" key="k0" />
]

export const hex='#F5C300'
const Spreaker = ({ title, ...restProps }) => {
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
          ? [<title key="Spreaker-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Spreaker',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Spreaker.displayName = 'Spreaker'

Spreaker.defaultProps = { height: 24, width: 24}

export default Spreaker
