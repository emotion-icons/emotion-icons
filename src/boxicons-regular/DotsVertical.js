import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10 10h4v4h-4zm0-6h4v4h-4zm0 12h4v4h-4z" key="k0" />
]


const DotsVertical = ({ title, ...restProps }) => {
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
          ? [<title key="DotsVertical-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DotsVertical',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DotsVertical.displayName = 'DotsVertical'

DotsVertical.defaultProps = { height: 24, width: 24}

export default DotsVertical
