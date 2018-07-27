import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={19} x2={10} y1={4} y2={4} key="k0" />
,
<line x1={14} x2={5} y1={20} y2={20} key="k1" />
,
<line x1={15} x2={9} y1={4} y2={20} key="k2" />
]


const Italic = ({ title, ...restProps }) => {
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
          ? [<title key="Italic-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Italic',
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

Italic.displayName = 'Italic'

Italic.defaultProps = { height: 24, width: 24}

export default Italic
