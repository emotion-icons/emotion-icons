import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2h-4zm-7-3.53v-2.19c-2.78 0-4.61.85-6 2.72.56-2.67 2.11-5.33 6-5.87V7l4 3.73-4 3.74z" key="k0" />
]


const ScreenShare = ({ title, ...restProps }) => {
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
          ? [<title key="ScreenShare-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ScreenShare',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ScreenShare.displayName = 'ScreenShare'

ScreenShare.defaultProps = { height: 24, width: 24}

export default ScreenShare
