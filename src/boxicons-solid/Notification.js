import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={18} cy={6} r={3} key="k0" />
,
<path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8.422A4.962 4.962 0 0 1 18 11a5 5 0 0 1-5-5c0-.712.153-1.387.422-2H5z" key="k1" />
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
