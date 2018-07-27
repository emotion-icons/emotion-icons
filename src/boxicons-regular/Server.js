import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6H4V5h16v4zm1 4H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H4v-4h16v4z" key="k0" />
,
<path d="M17 6h2v2h-2zm-3 0h2v2h-2zm3 10h2v2h-2zm-3 0h2v2h-2z" key="k1" />
]


const Server = ({ title, ...restProps }) => {
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
          ? [<title key="Server-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Server',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Server.displayName = 'Server'

Server.defaultProps = { height: 24, width: 24}

export default Server
