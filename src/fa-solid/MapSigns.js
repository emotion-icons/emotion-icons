import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M487.515 104.485L439.03 152.97a23.998 23.998 0 0 1-16.97 7.029H56c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h160v-8c0-13.255 10.745-24 24-24h32c13.255 0 24 10.745 24 24v8h126.059a24 24 0 0 1 16.97 7.029l48.485 48.485c4.687 4.687 4.687 12.285.001 16.971zM216 368v120c0 13.255 10.745 24 24 24h32c13.255 0 24-10.745 24-24V368h-80zm240-144H296v-48h-80v48H89.941a24 24 0 0 0-16.97 7.029l-48.485 48.485c-4.686 4.686-4.686 12.284 0 16.971l48.485 48.485a23.998 23.998 0 0 0 16.97 7.029H456c13.255 0 24-10.745 24-24v-80C480 234.745 469.255 224 456 224z" key="k0" />
]


const MapSigns = ({ title, ...restProps }) => {
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
          ? [<title key="MapSigns-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MapSigns',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MapSigns.displayName = 'MapSigns'

MapSigns.defaultProps = { height: undefined, width: undefined}

export default MapSigns
