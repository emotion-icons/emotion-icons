import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.01 14h-.8l-.27-.27a6.451 6.451 0 0 0 1.57-4.23c0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51a4.5 4.5 0 0 1 9 0 4.507 4.507 0 0 1-6.32 4.12L7.71 15.1a6.474 6.474 0 0 0 7.52-.67l.27.27v.79l5.01 4.99L22 19l-4.99-5z" key="k0" />
]


const YoutubeSearchedFor = ({ title, ...restProps }) => {
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
          ? [<title key="YoutubeSearchedFor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-YoutubeSearchedFor',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

YoutubeSearchedFor.displayName = 'YoutubeSearchedFor'

YoutubeSearchedFor.defaultProps = { height: 24, width: 24}

export default YoutubeSearchedFor
