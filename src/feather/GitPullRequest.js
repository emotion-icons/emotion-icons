import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={18} cy={18} r={3} key="k0" />
,
<circle cx={6} cy={6} r={3} key="k1" />
,
<path d="M13 6h3a2 2 0 0 1 2 2v7" key="k2" />
,
<line x1={6} x2={6} y1={9} y2={21} key="k3" />
]


const GitPullRequest = ({ title, ...restProps }) => {
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
          ? [<title key="GitPullRequest-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GitPullRequest',
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

GitPullRequest.displayName = 'GitPullRequest'

GitPullRequest.defaultProps = { height: 24, width: 24}

export default GitPullRequest
