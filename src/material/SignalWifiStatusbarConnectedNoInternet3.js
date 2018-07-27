import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z" key="k0" />
,
<path d="M20 13.28V8.71C18.35 7.87 15.94 7 13 7c-5.44 0-9.07 2.97-9.44 3.24l9.43 11.75.01.01.01-.01L20 13.28zM22 20h2v2h-2zm0-10h2v8h-2z" key="k1" />
]


const SignalWifiStatusbarConnectedNoInternet3 = ({ title, ...restProps }) => {
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
          ? [<title key="SignalWifiStatusbarConnectedNoInternet3-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 26 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalWifiStatusbarConnectedNoInternet3',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalWifiStatusbarConnectedNoInternet3.displayName = 'SignalWifiStatusbarConnectedNoInternet3'

SignalWifiStatusbarConnectedNoInternet3.defaultProps = { height: 24, width: 26}

export default SignalWifiStatusbarConnectedNoInternet3
