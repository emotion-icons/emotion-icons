import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 0h7.7v24H0V0zm8.5 8.5h7.8v7.8H8.5V8.5zm0-8.5H24v7.7H8.5V0z" key="k0" />
]

export const hex='#E12828'
const Flipboard = ({ title, ...restProps }) => {
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
          ? [<title key="Flipboard-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flipboard',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flipboard.displayName = 'Flipboard'

Flipboard.defaultProps = { height: 24, width: 24}

export default Flipboard
