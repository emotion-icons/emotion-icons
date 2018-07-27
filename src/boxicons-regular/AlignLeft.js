import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 19h18v2H3zm0-4h12v2H3zm0-4h18v2H3zm0-8h18v2H3zm0 4h12v2H3z" key="k0" />
]


const AlignLeft = ({ title, ...restProps }) => {
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
          ? [<title key="AlignLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AlignLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AlignLeft.displayName = 'AlignLeft'

AlignLeft.defaultProps = { height: 24, width: 24}

export default AlignLeft
