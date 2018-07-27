import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M256 88.017v335.964c0 21.438-25.943 31.998-40.971 16.971L126.059 352H24c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h102.059l88.971-88.954c15.01-15.01 40.97-4.49 40.97 16.971z" key="k0" />
]


const VolumeOff = ({ title, ...restProps }) => {
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
          ? [<title key="VolumeOff-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 256 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeOff',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VolumeOff.displayName = 'VolumeOff'

VolumeOff.defaultProps = { height: undefined, width: undefined}

export default VolumeOff
