import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM8 12H6c0-3.309 2.691-6 6-6v2c-2.206 0-4 1.794-4 4zm3.993 2a2.007 2.007 0 1 1 0-4.014 2.007 2.007 0 0 1 0 4.014z" key="k0" />
]


const Album = ({ title, ...restProps }) => {
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
          ? [<title key="Album-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Album',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Album.displayName = 'Album'

Album.defaultProps = { height: 24, width: 24}

export default Album
