import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h4v4a.999.999 0 0 0 1.707.707L13.414 17H21a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 12h-7a.996.996 0 0 0-.707.293L9 18.586V16a1 1 0 0 0-1-1H4V5h16v10z" key="k0" />
,
<path d="M6 7h12v2H6zm0 4h6v2H6z" key="k1" />
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
