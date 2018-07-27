import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 21.99l5.66-7.05C18.44 14.78 16.27 13 13 13s-5.44 1.78-5.66 1.95L13 21.99z" key="k0" />
,
<path fillOpacity={.3} d="M13.01 21.99L25.58 6.32C25.1 5.96 20.26 2 13 2S.9 5.96.42 6.32l12.57 15.66.01.02.01-.01z" key="k1" />
]


const SignalWifiStatusbar1Bar = ({ title, ...restProps }) => {
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
          ? [<title key="SignalWifiStatusbar1Bar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 26 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalWifiStatusbar1Bar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalWifiStatusbar1Bar.displayName = 'SignalWifiStatusbar1Bar'

SignalWifiStatusbar1Bar.defaultProps = { height: 24, width: 26}

export default SignalWifiStatusbar1Bar
