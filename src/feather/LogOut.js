import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" key="k0" />
,
<polyline points="16 17 21 12 16 7" key="k1" />
,
<line x1={21} x2={9} y1={12} y2={12} key="k2" />
]


const LogOut = ({ title, ...restProps }) => {
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
          ? [<title key="LogOut-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LogOut',
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

LogOut.displayName = 'LogOut'

LogOut.defaultProps = { height: 24, width: 24}

export default LogOut
