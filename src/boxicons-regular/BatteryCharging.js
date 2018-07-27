import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 12l4 1-1 4 5-5-4-1 1-4z" key="k0" />
,
<path d="M3 18h5l.536-2H4V8h4.723l2.083-2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1zM20 7a1 1 0 0 0-1-1h-5l-.535 2H18v8h-4.723l-2.084 2H19a1 1 0 0 0 1-1v-3h2v-4h-2V7z" key="k1" />
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
      viewBox: '0 0 24 24',
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

BatteryCharging.defaultProps = { height: 24, width: 24}

export default BatteryCharging
