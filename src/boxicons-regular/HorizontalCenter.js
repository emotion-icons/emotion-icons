import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 16l4-4-4-4v3H2v2h3zm14-5V8l-4 4 4 4v-3h3v-2h-2.072zm-8 7h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2zm0-5h2v3h-2z" key="k0" />
]


const HorizontalCenter = ({ title, ...restProps }) => {
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
          ? [<title key="HorizontalCenter-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HorizontalCenter',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

HorizontalCenter.displayName = 'HorizontalCenter'

HorizontalCenter.defaultProps = { height: 24, width: 24}

export default HorizontalCenter
