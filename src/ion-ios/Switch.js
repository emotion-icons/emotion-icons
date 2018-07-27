import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={144} cy={368} r={42} key="k0" />
,
<path d="M367.5 272h-223C91.2 272 48 315.2 48 368.5S91.2 464 144.5 464h223c53.3 0 96.5-42.2 96.5-95.5S420.8 272 367.5 272zM144 432c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" key="k1" />
,
<circle cx={368} cy={144} r={42} key="k2" />
,
<path d="M144.5 240h223c53.3 0 96.5-42.2 96.5-95.5S420.8 48 367.5 48h-223C91.2 48 48 91.2 48 144.5S91.2 240 144.5 240zM368 80c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64z" key="k3" />
]


const Switch = ({ title, ...restProps }) => {
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
          ? [<title key="Switch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Switch',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Switch.displayName = 'Switch'

Switch.defaultProps = { height: undefined, width: undefined}

export default Switch
