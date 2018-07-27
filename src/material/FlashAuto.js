import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z" key="k0" />
]


const FlashAuto = ({ title, ...restProps }) => {
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
          ? [<title key="FlashAuto-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FlashAuto',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FlashAuto.displayName = 'FlashAuto'

FlashAuto.defaultProps = { height: 24, width: 24}

export default FlashAuto
