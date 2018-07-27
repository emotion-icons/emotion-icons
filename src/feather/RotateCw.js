import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polyline points="23 4 23 10 17 10" key="k0" />
,
<path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" key="k1" />
]


const RotateCw = ({ title, ...restProps }) => {
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
          ? [<title key="RotateCw-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RotateCw',
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

RotateCw.displayName = 'RotateCw'

RotateCw.defaultProps = { height: 24, width: 24}

export default RotateCw
