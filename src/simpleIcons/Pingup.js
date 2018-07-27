import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.667 0H1.721v24h7.536V9.717h-2.76c-.504 0-.65-.314-.32-.698l4.324-5.044a.764.764 0 0 1 1.195 0l4.324 5.044c.314.384.18.698-.33.698h-2.759v6.676h.73c6.225 0 8.617-4.309 8.617-8.481C22.291 3.906 19.666 0 13.667 0" key="k0" />
]

export const hex='#00B1AB'
const Pingup = ({ title, ...restProps }) => {
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
          ? [<title key="Pingup-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pingup',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pingup.displayName = 'Pingup'

Pingup.defaultProps = { height: 24, width: 24}

export default Pingup
