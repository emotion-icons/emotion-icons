import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64z" key="k0" />
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
      viewBox: '0 0 512 512',
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

VolumeMute.defaultProps = { height: undefined, width: undefined}

export default VolumeMute
