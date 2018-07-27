import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 5v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8h-2v7H6V6h7V4H5a1 1 0 0 0-1 1z" key="k0" />
,
<circle cx={18} cy={6} r={3} key="k1" />
]


const Notification = ({ title, ...restProps }) => {
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
          ? [<title key="Notification-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Notification',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Notification.displayName = 'Notification'

Notification.defaultProps = { height: 24, width: 24}

export default Notification
