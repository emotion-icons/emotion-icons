import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillOpacity={.3} d="M2 22h20V2z" key="k0" />
,
<path d="M17 7L2 22h15z" key="k1" />
]


const NetworkCell = ({ title, ...restProps }) => {
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
          ? [<title key="NetworkCell-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-NetworkCell',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

NetworkCell.displayName = 'NetworkCell'

NetworkCell.defaultProps = { height: 24, width: 24}

export default NetworkCell
