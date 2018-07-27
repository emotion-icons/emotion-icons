import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<polygon points="5 4 15 12 5 20 5 4" key="k0" />
,
<line x1={19} x2={19} y1={5} y2={19} key="k1" />
]


const SkipForward = ({ title, ...restProps }) => {
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
          ? [<title key="SkipForward-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SkipForward',
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

SkipForward.displayName = 'SkipForward'

SkipForward.defaultProps = { height: 24, width: 24}

export default SkipForward
