import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 336c35.2 0 64-28.8 64-64V112c0-35.2-28.8-64-64-64s-64 28.8-64 64v160c0 35.2 28.8 64 64 64z" key="k0" />
,
<path d="M352 192c-7.7 0-14 6.3-14 14v69c0 45.2-36.8 82-82 82s-82-36.8-82-82v-69c0-7.7-6.3-14-14-14s-14 6.3-14 14v69c0 55.9 41.9 102.2 96 109.1V436h-36c-7.7 0-14 6.3-14 14s6.3 14 14 14h100c7.7 0 14-6.3 14-14s-6.3-14-14-14h-36v-51.9c54.1-6.9 96-53.2 96-109.1v-69c0-7.7-6.3-14-14-14z" key="k1" />
]


const Mic = ({ title, ...restProps }) => {
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
          ? [<title key="Mic-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Mic',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Mic.displayName = 'Mic'

Mic.defaultProps = { height: undefined, width: undefined}

export default Mic
