import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 .6h7.1l9.85 15.9V.6H24v22.8h-7.04L7.06 7.5v15.9H0V.6" key="k0" />
]

export const hex='#8F8F8F'
const Nintendo = ({ title, ...restProps }) => {
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
          ? [<title key="Nintendo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Nintendo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Nintendo.displayName = 'Nintendo'

Nintendo.defaultProps = { height: 24, width: 24}

export default Nintendo
