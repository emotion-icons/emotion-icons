import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.383 7.076a1.001 1.001 0 0 0-1.09.217L18 9.586V5a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-.617-.924zM16 18H4V6h12v12zm4-4.414L18.414 12 20 10.414v3.172z" key="k0" />
,
<path d="M9 16h2v-3h3v-2h-3V8H9v3H6v2h3z" key="k1" />
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
