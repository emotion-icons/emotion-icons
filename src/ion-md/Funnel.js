import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M208 400h96v-47.994h-96V400zM32 112v47.994h448V112H32zm80 168.783h288v-49.555H112v49.555z" key="k0" />
]


const Funnel = ({ title, ...restProps }) => {
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
          ? [<title key="Funnel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Funnel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Funnel.displayName = 'Funnel'

Funnel.defaultProps = { height: undefined, width: undefined}

export default Funnel
