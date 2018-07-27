import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684a.994.994 0 0 0 0 .633C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684a.994.994 0 0 0 0-.633C21.927 11.617 19.633 5 12 5zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" key="k0" />
]


const Show = ({ title, ...restProps }) => {
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
          ? [<title key="Show-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Show',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Show.displayName = 'Show'

Show.defaultProps = { height: 24, width: 24}

export default Show
