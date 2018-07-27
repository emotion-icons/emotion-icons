import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10 10h4v4h-4zm6 0h4v4h-4zM4 10h4v4H4z" key="k0" />
]


const DotsHorizontal = ({ title, ...restProps }) => {
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
          ? [<title key="DotsHorizontal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DotsHorizontal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DotsHorizontal.displayName = 'DotsHorizontal'

DotsHorizontal.defaultProps = { height: 24, width: 24}

export default DotsHorizontal
