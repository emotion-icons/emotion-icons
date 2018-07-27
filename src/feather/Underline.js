import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" key="k0" />
,
<line x1={4} x2={20} y1={21} y2={21} key="k1" />
]


const Underline = ({ title, ...restProps }) => {
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
          ? [<title key="Underline-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Underline',
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

Underline.displayName = 'Underline'

Underline.defaultProps = { height: 24, width: 24}

export default Underline
