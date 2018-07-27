import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.71 20.296L19 17.586V11h-2v4.586L7.414 6H12V4H5.414L3.71 2.296 2.296 3.71l18 18z" key="k0" />
,
<circle cx={17} cy={6} r={3} key="k1" />
,
<path d="M3 7.121V19a1 1 0 0 0 1 1h11.879l-2-2H5V9.121l-2-2z" key="k2" />
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
