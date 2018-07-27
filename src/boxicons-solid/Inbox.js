import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.948 11.684l-3-9A.997.997 0 0 0 18 2H6a.998.998 0 0 0-.948.684l-3 9 .012.004A.928.928 0 0 0 2 12v7a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-7a.964.964 0 0 0-.063-.313l.011-.003zM6.721 4H17.28l2.334 7H15a1 1 0 0 0-1 1c0 1.103-.897 2-2 2s-2-.897-2-2a1 1 0 0 0-1-1H4.387l2.334-7z" key="k0" />
]


const Inbox = ({ title, ...restProps }) => {
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
          ? [<title key="Inbox-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Inbox',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Inbox.displayName = 'Inbox'

Inbox.defaultProps = { height: 24, width: 24}

export default Inbox
