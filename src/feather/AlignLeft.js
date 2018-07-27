import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={17} x2={3} y1={10} y2={10} key="k0" />
,
<line x1={21} x2={3} y1={6} y2={6} key="k1" />
,
<line x1={21} x2={3} y1={14} y2={14} key="k2" />
,
<line x1={17} x2={3} y1={18} y2={18} key="k3" />
]


const AlignLeft = ({ title, ...restProps }) => {
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
          ? [<title key="AlignLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AlignLeft',
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

AlignLeft.displayName = 'AlignLeft'

AlignLeft.defaultProps = { height: 24, width: 24}

export default AlignLeft
