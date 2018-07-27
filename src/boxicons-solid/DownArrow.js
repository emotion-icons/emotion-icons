import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 6H5a1.001 1.001 0 0 0-.844 1.538l7 11a1.003 1.003 0 0 0 1.688-.001l7-11c.196-.308.208-.698.033-1.019A1.002 1.002 0 0 0 19 6z" key="k0" />
]


const DownArrow = ({ title, ...restProps }) => {
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
          ? [<title key="DownArrow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DownArrow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DownArrow.displayName = 'DownArrow'

DownArrow.defaultProps = { height: 24, width: 24}

export default DownArrow
