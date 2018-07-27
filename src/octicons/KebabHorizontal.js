import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" key="k0" />
]


const KebabHorizontal = ({ title, ...restProps }) => {
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
          ? [<title key="KebabHorizontal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 13 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-KebabHorizontal',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

KebabHorizontal.displayName = 'KebabHorizontal'

KebabHorizontal.defaultProps = { height: 16, width: 13}

export default KebabHorizontal
