import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M22 8V2L2 22h16V8z" key="k0" />
,
<path d="M20 10v8h2v-8h-2zm-8 12V12L2 22h10zm8 0h2v-2h-2v2z" key="k1" />
]


const SignalCellularConnectedNoInternet1Bar = ({ title, ...restProps }) => {
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
          ? [<title key="SignalCellularConnectedNoInternet1Bar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalCellularConnectedNoInternet1Bar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalCellularConnectedNoInternet1Bar.displayName = 'SignalCellularConnectedNoInternet1Bar'

SignalCellularConnectedNoInternet1Bar.defaultProps = { height: 24, width: 24}

export default SignalCellularConnectedNoInternet1Bar
