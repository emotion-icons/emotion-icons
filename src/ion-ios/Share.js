import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M376 176H269v146.6c0 7-5.4 13-12.4 13.4-7.5.4-13.6-5.6-13.6-13V176H136c-22 0-40 18-40 40v208c0 22 18 40 40 40h240c22 0 40-18 40-40V216c0-22-18-40-40-40zM269 92.1l47.9 47.2c5.1 5 13.3 5 18.4-.1 5-5.1 5-13.3-.1-18.4l-70-69c-2.5-2.4-5.8-3.7-9.1-3.7-1.7 0-3.4.3-5 1-1.5.6-2.9 1.6-4.1 2.7l-70 69c-5.1 5-5.2 13.3-.1 18.4 5 5.1 13.3 5.2 18.4.1L243 92.1V176h26V92.1z" key="k0" />
]


const Share = ({ title, ...restProps }) => {
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
          ? [<title key="Share-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Share',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Share.displayName = 'Share'

Share.defaultProps = { height: undefined, width: undefined}

export default Share
