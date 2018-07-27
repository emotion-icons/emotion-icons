import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.247 7.342l-6.384 7.296-3.257-2.485-1.213 1.59 4 3.053a1.002 1.002 0 0 0 1.36-.138l7-8-1.506-1.316zm7 0l-6.384 7.296-.805-.614-1.32 1.509 1.655 1.263a1.002 1.002 0 0 0 1.36-.138l7-8-1.506-1.316z" key="k0" />
]


const CheckDouble = ({ title, ...restProps }) => {
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
          ? [<title key="CheckDouble-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CheckDouble',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CheckDouble.displayName = 'CheckDouble'

CheckDouble.defaultProps = { height: 24, width: 24}

export default CheckDouble
