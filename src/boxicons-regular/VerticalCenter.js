import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13 5V2h-2v3H8l4 4 4-4zm0 17v-3h3l-4-4-4 4h3v3zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z" key="k0" />
]


const VerticalCenter = ({ title, ...restProps }) => {
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
          ? [<title key="VerticalCenter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VerticalCenter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VerticalCenter.displayName = 'VerticalCenter'

VerticalCenter.defaultProps = { height: 24, width: 24}

export default VerticalCenter
