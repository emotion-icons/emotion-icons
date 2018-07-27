import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1.496.868L12 18.151l6.504 3.717a.996.996 0 0 0 .998-.003A1 1 0 0 0 20 21V3a1 1 0 0 0-1-1H5zm13 17.276l-5.504-3.145a1.005 1.005 0 0 0-.992.001L6 19.276V4h12v15.276z" key="k0" />
]


const Bookmark = ({ title, ...restProps }) => {
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
          ? [<title key="Bookmark-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bookmark',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bookmark.displayName = 'Bookmark'

Bookmark.defaultProps = { height: 24, width: 24}

export default Bookmark
