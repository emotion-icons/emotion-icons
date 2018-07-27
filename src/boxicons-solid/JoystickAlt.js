import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 5H9c-3.848 0-6.984 3.132-7 6.988v.038C2.014 15.873 5.151 19 9 19h6c3.854 0 6.995-3.136 7-6.994v-.001V12v-.01C21.985 8.134 18.85 5 15 5zm-3 8h-2v2H8v-2H6v-2h2V9h2v2h2v2zm3 1a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" key="k0" />
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
