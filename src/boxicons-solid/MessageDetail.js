import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4v4a.999.999 0 0 0 1.707.707L13.414 17H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-9 10H6v-2h6v2zm6-4H6V7h12v2z" key="k0" />
]


const MessageDetail = ({ title, ...restProps }) => {
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
          ? [<title key="MessageDetail-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MessageDetail',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MessageDetail.displayName = 'MessageDetail'

MessageDetail.defaultProps = { height: 24, width: 24}

export default MessageDetail
