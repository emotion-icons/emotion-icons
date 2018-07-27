import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={1} key="k0" />
,
<circle cx={19} cy={12} r={1} key="k1" />
,
<circle cx={5} cy={12} r={1} key="k2" />
]


const MoreHorizontal = ({ title, ...restProps }) => {
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
          ? [<title key="MoreHorizontal-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MoreHorizontal',
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

MoreHorizontal.displayName = 'MoreHorizontal'

MoreHorizontal.defaultProps = { height: 24, width: 24}

export default MoreHorizontal
