import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M64 192v128h85.334L256 431.543V80.458L149.334 192H64zm288 64c0-38.399-21.333-72.407-53.333-88.863v176.636C330.667 328.408 352 294.4 352 256z" key="k0" />
]


const VolumeLow = ({ title, ...restProps }) => {
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
          ? [<title key="VolumeLow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-VolumeLow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

VolumeLow.displayName = 'VolumeLow'

VolumeLow.defaultProps = { height: undefined, width: undefined}

export default VolumeLow
