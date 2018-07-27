import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.401 0v24h9.6v-3.527H5.929V3.526h12.146v13.421h-6.073v3.525H21.6V0H2.401z" key="k0" />
]

export const hex='#212121'
const Pagekit = ({ title, ...restProps }) => {
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
          ? [<title key="Pagekit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pagekit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pagekit.displayName = 'Pagekit'

Pagekit.defaultProps = { height: 24, width: 24}

export default Pagekit
