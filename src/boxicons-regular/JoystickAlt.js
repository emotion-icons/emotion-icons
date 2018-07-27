import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={15} cy={13} r={1} key="k0" />
,
<circle cx={17} cy={11} r={1} key="k1" />
,
<path d="M10 9H8v2H6v2h2v2h2v-2h2v-2h-2z" key="k2" />
,
<path d="M15 5H9c-3.848 0-6.984 3.132-7 6.988v.038C2.014 15.873 5.151 19 9 19h6c3.854 0 6.995-3.136 7-6.994v-.016C21.985 8.134 18.85 5 15 5zm0 12H9a5.006 5.006 0 0 1-5-4.991C4.003 9.247 6.247 7 9 7h6c2.754 0 4.996 2.247 5 5.006A5.007 5.007 0 0 1 15 17z" key="k3" />
]


const JoystickAlt = ({ title, ...restProps }) => {
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
          ? [<title key="JoystickAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-JoystickAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

JoystickAlt.displayName = 'JoystickAlt'

JoystickAlt.defaultProps = { height: 24, width: 24}

export default JoystickAlt
