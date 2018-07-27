import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M393.2 161.2C380.5 96.6 323.9 48 256 48c-39.7 0-76 14-100.9 45.4 34.3 2.6 66.1 15.2 90.7 39.8 18.2 18.2 31 40.5 37.4 64.8h-33.5c-15.3-43.7-56-75-105.7-75-6 0-14.3.7-20.6 2C70 136 32 180.4 32 235.5 32 297.6 82.2 336 144 336h68V233h99.1l-33.2 67H311l-18 36h93.7c51.5 0 93.3-30 93.3-81.8 0-49.4-38.3-89.6-86.8-93zM212 368h22v96l59-128h-81z" key="k0" />
]


const Thunderstorm = ({ title, ...restProps }) => {
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
          ? [<title key="Thunderstorm-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Thunderstorm',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Thunderstorm.displayName = 'Thunderstorm'

Thunderstorm.defaultProps = { height: undefined, width: undefined}

export default Thunderstorm
