import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 18V8.121l-2-2V19a1 1 0 0 0 1 1h12.879l-2-2H4zm16.293-1.293A.999.999 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.585V5a1 1 0 0 0-1-1H5.414L3.707 2.293 2.293 3.707l18 18 1.414-1.414L18 16.586v-2.172l2.293 2.293zM20 10.414v3.172L18.414 12 20 10.414zM7.414 6H16v8.586L7.414 6z" key="k0" />
]


const VideoOff = ({ title, ...restProps }) => {
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
          ? [<title key="VideoOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VideoOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VideoOff.displayName = 'VideoOff'

VideoOff.defaultProps = { height: 24, width: 24}

export default VideoOff
