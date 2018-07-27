import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 3h18v2H3zm6 4h12v2H9zm0 4h12v2H9zm0 4h12v2H9zm-6 4h18v2H3zm0-3l4-4-4-4z" key="k0" />
]


const LeftIndent = ({ title, ...restProps }) => {
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
          ? [<title key="LeftIndent-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LeftIndent',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LeftIndent.displayName = 'LeftIndent'

LeftIndent.defaultProps = { height: 24, width: 24}

export default LeftIndent
