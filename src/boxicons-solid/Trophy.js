import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 .995L5.995 4H3a1 1 0 0 0-1 1v3c0 2.206 1.794 4 4 4h.052A6.027 6.027 0 0 0 11 16.913V20H8v2h8v-2h-3v-3.094A6.024 6.024 0 0 0 17.906 12H18c2.206 0 4-1.794 4-4V5a1 1 0 0 0-1-1zM4 8V6h1.984l-.021 3.996A2 2 0 0 1 4 8zm14 2V6h2v2c0 1.103-.897 2-2 2z" key="k0" />
]


const Trophy = ({ title, ...restProps }) => {
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
          ? [<title key="Trophy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Trophy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Trophy.displayName = 'Trophy'

Trophy.defaultProps = { height: 24, width: 24}

export default Trophy
