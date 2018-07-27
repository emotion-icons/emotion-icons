import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M22 8V2L2 22h16V8z" key="k0" />
,
<path d="M14 22V10L2 22h12zm6-12v8h2v-8h-2zm0 12h2v-2h-2v2z" key="k1" />
]


const SignalCellularConnectedNoInternet2Bar = ({ title, ...restProps }) => {
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
          ? [<title key="SignalCellularConnectedNoInternet2Bar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalCellularConnectedNoInternet2Bar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalCellularConnectedNoInternet2Bar.displayName = 'SignalCellularConnectedNoInternet2Bar'

SignalCellularConnectedNoInternet2Bar.defaultProps = { height: 24, width: 24}

export default SignalCellularConnectedNoInternet2Bar
