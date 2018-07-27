import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="14 2 18 6 7 17 3 17 3 13 14 2" key="k0" />
,
<line x1={3} x2={21} y1={22} y2={22} key="k1" />
]


const Edit3 = ({ title, ...restProps }) => {
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
          ? [<title key="Edit3-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Edit3',
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

Edit3.displayName = 'Edit3'

Edit3.defaultProps = { height: 24, width: 24}

export default Edit3
