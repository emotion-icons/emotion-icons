import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<g fill="#010101" key="k0">
  <circle cx={9} cy={12} r={8} />
  <path d="M17 4.26v2.09a5.99 5.99 0 0 1 0 11.3v2.09c3.45-.89 6-4.01 6-7.74s-2.55-6.85-6-7.74z" />
</g>
]


const FiberSmartRecord = ({ title, ...restProps }) => {
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
          ? [<title key="FiberSmartRecord-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FiberSmartRecord',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FiberSmartRecord.displayName = 'FiberSmartRecord'

FiberSmartRecord.defaultProps = { height: 24, width: 24}

export default FiberSmartRecord
