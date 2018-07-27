import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.995 7.995C19.995 3.6 16.396 0 12 0S4.005 3.6 4.005 7.995c0 2.55 1.2 4.89 3.194 6.405v7.979H8.82V24h6.359v-1.62H16.8V14.4a7.975 7.975 0 0 0 3.195-6.405zM8.805 20.774v-1.575h6.391v1.575H8.805zm0-3.194v-1.575h6.391v1.575H8.805zm6.75-4.261l-.359.24v.841H8.805v-.84l-.345-.24a6.36 6.36 0 0 1-2.85-5.324c0-3.525 2.85-6.391 6.39-6.391s6.39 2.851 6.39 6.391a6.34 6.34 0 0 1-2.85 5.324h.015z" key="k0" />
]

export const hex='#FFBB00'
const GoogleKeep = ({ title, ...restProps }) => {
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
          ? [<title key="GoogleKeep-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-GoogleKeep',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

GoogleKeep.displayName = 'GoogleKeep'

GoogleKeep.defaultProps = { height: 24, width: 24}

export default GoogleKeep
