import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 17h3.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20v-2.042L3.042 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zM13.472 3.118a1 1 0 0 0-1.026.05L7.728 6.313l-4.021-4.02-1.414 1.414 18 18 1.414-1.414-2.023-2.023A9.566 9.566 0 0 0 21.999 12c0-4.091-2.472-7.453-5.999-9v2c2.387 1.386 3.999 4.047 3.999 7a8.113 8.113 0 0 1-1.672 4.913l-1.285-1.285C17.644 14.536 18 13.19 18 12c0-1.771-.775-3.9-2-5v7.586l-2-2V4a1 1 0 0 0-.528-.882z" key="k0" />
]


const VolumeMute = ({ title, ...restProps }) => {
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
          ? [<title key="VolumeMute-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeMute',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VolumeMute.displayName = 'VolumeMute'

VolumeMute.defaultProps = { height: 24, width: 24}

export default VolumeMute
