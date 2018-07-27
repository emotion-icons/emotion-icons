import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={12} cy={12} r={8} fill="#010101" key="k0" />
]


const FiberManualRecord = ({ title, ...restProps }) => {
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
          ? [<title key="FiberManualRecord-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FiberManualRecord',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FiberManualRecord.displayName = 'FiberManualRecord'

FiberManualRecord.defaultProps = { height: 24, width: 24}

export default FiberManualRecord
