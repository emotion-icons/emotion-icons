import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 165.8c-49.9 0-90.3 40.4-90.3 90.3s40.4 90.2 90.3 90.2 90.3-40.4 90.3-90.2c0-49.9-40.4-90.3-90.3-90.3zm0 130.6c-22.3 0-40.4-18.1-40.4-40.4s18.1-40.4 40.4-40.4 40.4 18.1 40.4 40.4-18.1 40.4-40.4 40.4z" key="k0" />
,
<path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm0 322c-63 0-114-51.1-114-114 0-63 51.1-114 114-114s114 51 114 114-51 114-114 114z" key="k1" />
]


const Disc = ({ title, ...restProps }) => {
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
          ? [<title key="Disc-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Disc',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Disc.displayName = 'Disc'

Disc.defaultProps = { height: undefined, width: undefined}

export default Disc
