import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M432.8 136v96H122.3l84.4-86.2-33.2-33.8L32 256l141.5 144 33.2-33.8-84.4-86.2H480V136h-47.2z" key="k0" />
]


const ReturnLeft = ({ title, ...restProps }) => {
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
          ? [<title key="ReturnLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ReturnLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ReturnLeft.displayName = 'ReturnLeft'

ReturnLeft.defaultProps = { height: undefined, width: undefined}

export default ReturnLeft
