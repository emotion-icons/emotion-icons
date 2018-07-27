import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M0 160c0-53 114.6-96 256-96s256 43 256 96-114.6 96-256 96S0 213 0 160zm0 82.2V352c0 53 114.6 96 256 96s256-43 256-96V242.2c-113.4 82.3-398.5 82.4-512 0z" key="k0" />
]


const HockeyPuck = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="HockeyPuck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-HockeyPuck',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

HockeyPuck.displayName = 'HockeyPuck'

HockeyPuck.defaultProps = { height: undefined, width: undefined}

export default HockeyPuck
