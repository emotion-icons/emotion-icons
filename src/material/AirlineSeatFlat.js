import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 11v2H9V7h9c2.21 0 4 1.79 4 4zM2 14v2h6v2h8v-2h6v-2H2zm5.14-1.9a3 3 0 0 0-.04-4.24 3 3 0 0 0-4.24.04 3 3 0 0 0 .04 4.24 3 3 0 0 0 4.24-.04z" key="k0" />
]


const AirlineSeatFlat = ({ title, ...restProps }) => {
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
          ? [<title key="AirlineSeatFlat-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AirlineSeatFlat',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AirlineSeatFlat.displayName = 'AirlineSeatFlat'

AirlineSeatFlat.defaultProps = { height: 24, width: 24}

export default AirlineSeatFlat
