import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M480 256L262.4 110v292L480 256zM32 110v292l217.6-146L32 110z" key="k0" />
]


const Fastforward = ({ title, ...restProps }) => {
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
          ? [<title key="Fastforward-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Fastforward',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Fastforward.displayName = 'Fastforward'

Fastforward.defaultProps = { height: undefined, width: undefined}

export default Fastforward
