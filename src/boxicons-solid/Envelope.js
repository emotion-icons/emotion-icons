import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.925 4.626A1 1 0 0 0 21 4H3a.998.998 0 0 0-.924.626L12 13.648l9.925-9.022z" key="k0" />
,
<path d="M12 16a1 1 0 0 1-.673-.26L2 7.261V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7.261l-9.327 8.479A1 1 0 0 1 12 16z" key="k1" />
]


const Envelope = ({ title, ...restProps }) => {
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
          ? [<title key="Envelope-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Envelope',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Envelope.displayName = 'Envelope'

Envelope.defaultProps = { height: 24, width: 24}

export default Envelope
