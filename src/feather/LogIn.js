import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" key="k0" />
,
<polyline points="10 17 15 12 10 7" key="k1" />
,
<line x1={15} x2={3} y1={12} y2={12} key="k2" />
]


const LogIn = ({ title, ...restProps }) => {
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
          ? [<title key="LogIn-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LogIn',
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

LogIn.displayName = 'LogIn'

LogIn.defaultProps = { height: 24, width: 24}

export default LogIn
