import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={22} height={14} x={1} y={5} rx={7} ry={7} key="k0" />
,
<circle cx={8} cy={12} r={3} key="k1" />
]


const ToggleLeft = ({ title, ...restProps }) => {
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
          ? [<title key="ToggleLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ToggleLeft',
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

ToggleLeft.displayName = 'ToggleLeft'

ToggleLeft.defaultProps = { height: 24, width: 24}

export default ToggleLeft
