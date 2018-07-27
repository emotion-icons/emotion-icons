import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 6.83V20H6.83L20 6.83M22 2L2 22h20V2z" key="k0" />
]


const SignalCellularNull = ({ title, ...restProps }) => {
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
          ? [<title key="SignalCellularNull-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SignalCellularNull',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SignalCellularNull.displayName = 'SignalCellularNull'

SignalCellularNull.defaultProps = { height: 24, width: 24}

export default SignalCellularNull
