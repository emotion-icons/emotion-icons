import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M338.2 76.8h-37.4V32h-89.6v44.8h-37.4c-16.4 0-29.8 13.4-29.8 29.8V450c0 16.6 13.4 30 29.8 30H338c16.6 0 30-13.4 30-29.8V106.6c0-16.4-13.4-29.8-29.8-29.8z" key="k0" />
]


const BatteryFull = ({ title, ...restProps }) => {
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
          ? [<title key="BatteryFull-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BatteryFull',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BatteryFull.displayName = 'BatteryFull'

BatteryFull.defaultProps = { height: undefined, width: undefined}

export default BatteryFull
