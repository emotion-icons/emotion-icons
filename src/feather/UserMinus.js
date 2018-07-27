import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" key="k0" />
,
<circle cx={8.5} cy={7} r={4} key="k1" />
,
<line x1={23} x2={17} y1={11} y2={11} key="k2" />
]


const UserMinus = ({ title, ...restProps }) => {
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
          ? [<title key="UserMinus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UserMinus',
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

UserMinus.displayName = 'UserMinus'

UserMinus.defaultProps = { height: 24, width: 24}

export default UserMinus
