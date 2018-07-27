import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M2 22h20V2z" key="k0" />
,
<path d="M14 10L2 22h12z" key="k1" />
]


const SignalCellular2Bar = ({ title, ...restProps }) => {
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
          ? [<title key="SignalCellular2Bar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalCellular2Bar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalCellular2Bar.displayName = 'SignalCellular2Bar'

SignalCellular2Bar.defaultProps = { height: 24, width: 24}

export default SignalCellular2Bar
