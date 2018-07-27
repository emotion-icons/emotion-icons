import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 3h18v2H3zm0 16h18v2H3zm5-4h13v2H8zm-5-4h18v2H3zm5-4h13v2H8z" key="k0" />
]


const AlignRight = ({ title, ...restProps }) => {
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
          ? [<title key="AlignRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AlignRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AlignRight.displayName = 'AlignRight'

AlignRight.defaultProps = { height: 24, width: 24}

export default AlignRight
