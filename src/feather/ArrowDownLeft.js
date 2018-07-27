import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={17} x2={7} y1={7} y2={17} key="k0" />
,
<polyline points="17 17 7 17 7 7" key="k1" />
]


const ArrowDownLeft = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowDownLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowDownLeft',
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

ArrowDownLeft.displayName = 'ArrowDownLeft'

ArrowDownLeft.defaultProps = { height: 24, width: 24}

export default ArrowDownLeft
