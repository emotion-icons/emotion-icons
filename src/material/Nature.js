import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 16.12a7 7 0 0 0 6.17-6.95c0-3.87-3.13-7-7-7s-7 3.13-7 7A6.98 6.98 0 0 0 11 16.06V20H5v2h14v-2h-6v-3.88z" key="k0" />
]


const Nature = ({ title, ...restProps }) => {
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
          ? [<title key="Nature-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Nature',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Nature.displayName = 'Nature'

Nature.defaultProps = { height: 24, width: 24}

export default Nature
