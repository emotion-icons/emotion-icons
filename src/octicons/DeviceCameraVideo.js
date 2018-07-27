import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M15.2 2.09L10 5.72V3c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V9.28l5.2 3.63c.33.23.8 0 .8-.41v-10c0-.41-.47-.64-.8-.41z" key="k0" />
]


const DeviceCameraVideo = ({ title, ...restProps }) => {
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
          ? [<title key="DeviceCameraVideo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 16 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DeviceCameraVideo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DeviceCameraVideo.displayName = 'DeviceCameraVideo'

DeviceCameraVideo.defaultProps = { height: 16, width: 16}

export default DeviceCameraVideo
