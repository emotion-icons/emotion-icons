import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 3h18v2H3zm0 4h12v2H3zm0 4h12v2H3zm0 4h12v2H3zm0 4h18v2H3zM21 8l-4 4 4 4z" key="k0" />
]


const RightIndent = ({ title, ...restProps }) => {
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
          ? [<title key="RightIndent-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RightIndent',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RightIndent.displayName = 'RightIndent'

RightIndent.defaultProps = { height: 24, width: 24}

export default RightIndent
