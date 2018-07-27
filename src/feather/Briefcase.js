import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={20} height={14} x={2} y={7} rx={2} ry={2} key="k0" />
,
<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" key="k1" />
]


const Briefcase = ({ title, ...restProps }) => {
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
          ? [<title key="Briefcase-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Briefcase',
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

Briefcase.displayName = 'Briefcase'

Briefcase.defaultProps = { height: 24, width: 24}

export default Briefcase
