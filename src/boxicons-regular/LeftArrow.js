import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.463 19.844A1 1 0 0 0 18 19V5a.998.998 0 0 0-1.538-.843l-11 7a1 1 0 0 0 .001 1.687l11 7zM16 6.822v10.356L7.862 12 16 6.822z" key="k0" />
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
