import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M0 14l6-6-6-6v12z" key="k0" />
]


const TriangleRight = ({ title, ...restProps }) => {
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
          ? [<title key="TriangleRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 6 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TriangleRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TriangleRight.displayName = 'TriangleRight'

TriangleRight.defaultProps = { height: 16, width: 6}

export default TriangleRight
