import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5.463 12.844l11 7A1 1 0 0 0 18 19V5a.998.998 0 0 0-1.538-.843l-11 7a1 1 0 0 0 .001 1.687z" key="k0" />
]


const LeftArrow = ({ title, ...restProps }) => {
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
          ? [<title key="LeftArrow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LeftArrow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LeftArrow.displayName = 'LeftArrow'

LeftArrow.defaultProps = { height: 24, width: 24}

export default LeftArrow
