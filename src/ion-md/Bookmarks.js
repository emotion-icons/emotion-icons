import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M405.2 64h-21c15 5.7 22.8 20.6 22.8 42.7v298.7c0 22.1-7 37.3-22.8 42.7h21c23.7 0 42.8-19.2 42.8-42.7V106.7c0-23.5-19.1-42.7-42.8-42.7zm-59.7.2c-1.4-.1-2.8-.2-4.2-.2H106.7C83.2 64 64 83.2 64 106.7v298.7c0 23.5 19.2 42.7 42.7 42.7h234.7c1.4 0 2.8-.1 4.2-.2 21.5-2.1 38.5-20.4 38.5-42.5V106.7c-.1-22.1-17.1-40.4-38.6-42.5zM208 256l-56-32-56 32V96h112v160z" key="k0" />
]


const Bookmarks = ({ title, ...restProps }) => {
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
          ? [<title key="Bookmarks-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bookmarks',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bookmarks.displayName = 'Bookmarks'

Bookmarks.defaultProps = { height: undefined, width: undefined}

export default Bookmarks
