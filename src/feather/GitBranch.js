import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<line x1={6} x2={6} y1={3} y2={15} key="k0" />
,
<circle cx={18} cy={6} r={3} key="k1" />
,
<circle cx={6} cy={18} r={3} key="k2" />
,
<path d="M18 9a9 9 0 0 1-9 9" key="k3" />
]


const GitBranch = ({ title, ...restProps }) => {
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
          ? [<title key="GitBranch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitBranch',
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

GitBranch.displayName = 'GitBranch'

GitBranch.defaultProps = { height: 24, width: 24}

export default GitBranch
