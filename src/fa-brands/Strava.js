import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M301.6 292l-43.9 88.2-44.6-88.2h-67.6l112.2 220 111.5-220h-67.6zM151.4 0L0 292h89.2l62.2-116.1L213.1 292h88.5L151.4 0z" key="k0" />
]


const Strava = ({ title, ...restProps }) => {
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
          ? [<title key="Strava-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 369 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Strava',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Strava.displayName = 'Strava'

Strava.defaultProps = { height: undefined, width: undefined}

export default Strava
