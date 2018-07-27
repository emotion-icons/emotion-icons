import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M512 152v80c0 13.255-10.745 24-24 24h-8v168c0 13.255-10.745 24-24 24h-8v40c0 13.255-10.745 24-24 24h-48c-13.255 0-24-10.745-24-24v-40H160v40c0 13.255-10.745 24-24 24H88c-13.255 0-24-10.745-24-24v-40h-8c-13.255 0-24-10.745-24-24V256h-8c-13.255 0-24-10.745-24-24v-80c0-13.255 10.745-24 24-24h8V80C32 35.817 132.288 0 256 0s224 35.817 224 80v48h8c13.255 0 24 10.745 24 24zM112 320c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm288 0c-22.091 0-40 17.909-40 40s17.909 40 40 40 40-17.909 40-40-17.909-40-40-40zm32-56V120c0-13.255-10.745-24-24-24H104c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h304c13.255 0 24-10.745 24-24z" key="k0" />
]


const Bus = ({ title, ...restProps }) => {
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
          ? [<title key="Bus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bus.displayName = 'Bus'

Bus.defaultProps = { height: undefined, width: undefined}

export default Bus
