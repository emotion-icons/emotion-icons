import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M0 5l6 6 6-6H0z" key="k0" />
]


const TriangleDown = ({ title, ...restProps }) => {
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
          ? [<title key="TriangleDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 12 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TriangleDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TriangleDown.displayName = 'TriangleDown'

TriangleDown.defaultProps = { height: 16, width: 12}

export default TriangleDown
