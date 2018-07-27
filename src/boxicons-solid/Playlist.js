import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 5v8.333a3.465 3.465 0 0 0-1.493-.346c-1.934 0-3.507 1.573-3.507 3.507S14.573 20 16.507 20s3.507-1.573 3.507-3.507c0-.177-.027-.347-.053-.517H20V6h2V4h-3a1 1 0 0 0-1 1zM2 5h14v2H2z" key="k0" />
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
