import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" key="k0" />
,
<circle cx={12} cy={12} r={3} key="k1" />
]


const Eye = ({ title, ...restProps }) => {
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
          ? [<title key="Eye-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Eye',
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

Eye.displayName = 'Eye'

Eye.defaultProps = { height: 24, width: 24}

export default Eye
