import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M396 144H64c-26.4 0-48 21.6-48 48v128c0 26.4 21.6 48 48 48h332c26.4 0 48-21.6 48-48V192c0-26.4-21.6-48-48-48zm20 176c0 11-9 20-20 20H64c-11 0-20-9-20-20V192c0-11 9-20 20-20h332c11 0 20 9 20 20v128zm48-115.4v102.8c16 0 32-27.7 32-51.4s-16-51.4-32-51.4z" key="k0" />
,
<path d="M384 192H76c-6.6 0-12 5.4-12 12v104c0 6.6 5.4 12 12 12h308c6.6 0 12-5.4 12-12V204c0-6.6-5.4-12-12-12zM218.8 308l8.4-43H200l45.2-61-8.4 43H264l-45.2 61z" key="k1" />
]


const BatteryCharging = ({ title, ...restProps }) => {
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
          ? [<title key="BatteryCharging-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BatteryCharging',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BatteryCharging.displayName = 'BatteryCharging'

BatteryCharging.defaultProps = { height: undefined, width: undefined}

export default BatteryCharging
