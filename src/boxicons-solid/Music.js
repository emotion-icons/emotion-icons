import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.507 14.986c-1.934 0-3.507 1.573-3.507 3.507S14.573 22 16.507 22c1.76 0 3.207-1.308 3.456-3H20v-.371c.002-.047.014-.09.014-.136s-.012-.089-.014-.136V7a.999.999 0 0 0-.594-.914l-9-4A1 1 0 0 0 9 3v8.319a3.466 3.466 0 0 0-1.493-.347C5.573 10.973 4 12.546 4 14.479s1.573 3.507 3.507 3.507c1.755 0 3.2-1.301 3.454-2.986H11v-.385c.002-.047.014-.09.014-.136s-.012-.088-.014-.135V4.539l7 3.11v7.684a3.466 3.466 0 0 0-1.493-.347z" key="k0" />
]


const Music = ({ title, ...restProps }) => {
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
          ? [<title key="Music-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Music',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Music.displayName = 'Music'

Music.defaultProps = { height: 24, width: 24}

export default Music
