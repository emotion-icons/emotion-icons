import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" key="k0" />
,
<polyline points="22 4 12 14.01 9 11.01" key="k1" />
]


const CheckCircle = ({ title, ...restProps }) => {
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
          ? [<title key="CheckCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CheckCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

CheckCircle.displayName = 'CheckCircle'

CheckCircle.defaultProps = { height: 24, width: 24}

export default CheckCircle
