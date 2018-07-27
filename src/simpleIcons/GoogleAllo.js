import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.665.005c-.702.018-1.417.098-2.14.243C4.788 1.193 1.08 4.974.21 9.728c-1.36 7.406 4.096 14.256 11.16 14.256L22.227 24c.98 0 1.774-.793 1.774-1.774V12C24 5.26 18.445-.18 11.665.005zM12 6.135A5.863 5.863 0 0 1 17.862 12v5.61a.273.273 0 0 1-.467.194l-1.46-1.46a5.864 5.864 0 1 1-3.936-10.209z" key="k0" />
]

export const hex='#ECB842'
const GoogleAllo = ({ title, ...restProps }) => {
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
          ? [<title key="GoogleAllo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GoogleAllo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GoogleAllo.displayName = 'GoogleAllo'

GoogleAllo.defaultProps = { height: 24, width: 24}

export default GoogleAllo
