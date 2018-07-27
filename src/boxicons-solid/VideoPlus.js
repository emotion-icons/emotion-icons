import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.383 7.076a1.005 1.005 0 0 0-1.09.216l-2.297 2.294L18 5.001A.998.998 0 0 0 17 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1.004 1.004 0 0 0 1-1.001l-.004-4.585 2.297 2.294A1 1 0 1 0 22 16V8a1 1 0 0 0-.617-.924zM14 13h-3v3H9v-3H6v-2h3V8h2v3h3v2z" key="k0" />
]


const VideoPlus = ({ title, ...restProps }) => {
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
          ? [<title key="VideoPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VideoPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VideoPlus.displayName = 'VideoPlus'

VideoPlus.defaultProps = { height: 24, width: 24}

export default VideoPlus
