import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.71 20.296L20 18.586v-8.008A4.962 4.962 0 0 1 18 11a5 5 0 0 1-5-5c0-.712.153-1.387.422-2H5.414L3.71 2.296 2.296 3.71l18 18 1.414-1.414zM4 19a1 1 0 0 0 1 1h10.879L4 8.121V19z" key="k0" />
,
<circle cx={18} cy={6} r={3} key="k1" />
]


const NotificationOff = ({ title, ...restProps }) => {
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
          ? [<title key="NotificationOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-NotificationOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

NotificationOff.displayName = 'NotificationOff'

NotificationOff.defaultProps = { height: 24, width: 24}

export default NotificationOff
