import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M6 2L0 8l6 6V2z" key="k0" />
]


const TriangleLeft = ({ title, ...restProps }) => {
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
          ? [<title key="TriangleLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 6 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TriangleLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TriangleLeft.displayName = 'TriangleLeft'

TriangleLeft.defaultProps = { height: 16, width: 6}

export default TriangleLeft
