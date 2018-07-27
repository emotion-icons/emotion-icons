import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={19} r={2} key="k0" />
,
<path d="M10 3h4v12h-4z" key="k1" />
]


const PriorityHigh = ({ title, ...restProps }) => {
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
          ? [<title key="PriorityHigh-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PriorityHigh',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PriorityHigh.displayName = 'PriorityHigh'

PriorityHigh.defaultProps = { height: 24, width: 24}

export default PriorityHigh
