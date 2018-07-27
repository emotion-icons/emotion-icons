import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M24.24 8l1.35-1.68C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01L20 13.28V8h4.24z" key="k0" />
,
<path d="M5.45 12.59l7.54 9.4.01.01.01-.01L20 13.28v-1.09c-1.07-.73-3.59-2.19-7-2.19-4.36 0-7.26 2.38-7.55 2.59zM22 10v8h2v-8h-2zm0 12h2v-2h-2v2z" key="k1" />
]


const SignalWifiStatusbarConnectedNoInternet2 = ({ title, ...restProps }) => {
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
          ? [<title key="SignalWifiStatusbarConnectedNoInternet2-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 26 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalWifiStatusbarConnectedNoInternet2',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalWifiStatusbarConnectedNoInternet2.displayName = 'SignalWifiStatusbarConnectedNoInternet2'

SignalWifiStatusbarConnectedNoInternet2.defaultProps = { height: 24, width: 26}

export default SignalWifiStatusbarConnectedNoInternet2
