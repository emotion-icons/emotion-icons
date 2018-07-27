import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4v4a.999.999 0 0 0 1.707.707L13.414 17H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" key="k0" />
]


const Message = ({ title, ...restProps }) => {
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
          ? [<title key="Message-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Message',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Message.displayName = 'Message'

Message.defaultProps = { height: 24, width: 24}

export default Message
