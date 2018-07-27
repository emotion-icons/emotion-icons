import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.5 2h-11C4.002 2 1.97 4.012 1.97 6.484c0 .087.013.172.036.255A4.507 4.507 0 0 0 6.5 11h11c2.481 0 4.5-2.019 4.5-4.516C22 4.012 19.981 2 17.5 2zm0 7C16.145 9 15 7.855 15 6.5S16.145 4 17.5 4 20 5.145 20 6.5 18.855 9 17.5 9zm0 4h-11c-2.498 0-4.53 2.012-4.53 4.484 0 .087.013.172.036.255A4.507 4.507 0 0 0 6.5 22h11c2.481 0 4.5-2.019 4.5-4.516C22 15.012 19.981 13 17.5 13zm-11 7C5.145 20 4 18.855 4 17.5S5.145 15 6.5 15 9 16.145 9 17.5 7.855 20 6.5 20z" key="k0" />
]


const Toggle = ({ title, ...restProps }) => {
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
          ? [<title key="Toggle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Toggle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Toggle.displayName = 'Toggle'

Toggle.defaultProps = { height: 24, width: 24}

export default Toggle
