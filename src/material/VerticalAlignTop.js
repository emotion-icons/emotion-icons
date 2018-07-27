import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 11h3v10h2V11h3l-4-4-4 4zM4 3v2h16V3H4z" key="k0" />
]


const VerticalAlignTop = ({ title, ...restProps }) => {
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
          ? [<title key="VerticalAlignTop-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VerticalAlignTop',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VerticalAlignTop.displayName = 'VerticalAlignTop'

VerticalAlignTop.defaultProps = { height: 24, width: 24}

export default VerticalAlignTop
