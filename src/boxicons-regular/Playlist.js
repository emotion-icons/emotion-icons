import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 16.493C13 18.427 14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1v8.333a3.465 3.465 0 0 0-1.493-.346A3.51 3.51 0 0 0 13 16.493zm3.507-1.507c.831 0 1.507.676 1.507 1.507S17.338 18 16.507 18 15 17.324 15 16.493s.676-1.507 1.507-1.507zM2 5h14v2H2z" key="k0" />
,
<path d="M2 9h14v2H2zm0 4h9v2H2zm0 4h9v2H2z" key="k1" />
]


const Playlist = ({ title, ...restProps }) => {
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
          ? [<title key="Playlist-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Playlist',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Playlist.displayName = 'Playlist'

Playlist.defaultProps = { height: 24, width: 24}

export default Playlist
