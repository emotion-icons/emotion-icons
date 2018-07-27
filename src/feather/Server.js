import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<rect width={20} height={8} x={2} y={2} rx={2} ry={2} key="k0" />
,
<rect width={20} height={8} x={2} y={14} rx={2} ry={2} key="k1" />
,
<line x1={6} x2={6} y1={6} y2={6} key="k2" />
,
<line x1={6} x2={6} y1={18} y2={18} key="k3" />
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
        "fill": "none",
  "stroke": "currentColor",
  "strokeLinecap": "round",
  "strokeLinejoin": "round",
      ...restProps
    }
    )
  }

Server.displayName = 'Server'

Server.defaultProps = { height: 24, width: 24}

export default Server
