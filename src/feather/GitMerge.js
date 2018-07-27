import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={18} cy={18} r={3} key="k0" />
,
<circle cx={6} cy={6} r={3} key="k1" />
,
<path d="M6 21V9a9 9 0 0 0 9 9" key="k2" />
]


const GitMerge = ({ title, ...restProps }) => {
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
          ? [<title key="GitMerge-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitMerge',
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

GitMerge.displayName = 'GitMerge'

GitMerge.defaultProps = { height: 24, width: 24}

export default GitMerge
