import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7.231 18.641c.191.227.472.359.769.359h13a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6.001zM8.469 7H20v10H8.469l-4.167-5 4.167-5z" key="k0" />
]


const Tag = ({ title, ...restProps }) => {
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
          ? [<title key="Tag-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Tag',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Tag.displayName = 'Tag'

Tag.defaultProps = { height: 24, width: 24}

export default Tag
