import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M344 305.5c-17.5 31.6-57.4 54.5-96 54.5-56.6 0-104-47.4-104-104s47.4-104 104-104c38.6 0 78.5 22.9 96 54.5 13.7-50.9 41.7-93.3 87-117.8C385.7 39.1 320.5 8 248 8 111 8 0 119 0 256s111 248 248 248c72.5 0 137.7-31.1 183-80.7-45.3-24.5-73.3-66.9-87-117.8z" key="k0" />
]


const Cuttlefish = ({ title, ...restProps }) => {
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
          ? [<title key="Cuttlefish-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 440 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Cuttlefish',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Cuttlefish.displayName = 'Cuttlefish'

Cuttlefish.defaultProps = { height: undefined, width: undefined}

export default Cuttlefish
