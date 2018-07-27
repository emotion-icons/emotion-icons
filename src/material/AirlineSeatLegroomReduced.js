import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.97 19.2c.18.96-.55 1.8-1.47 1.8H14v-3l1-4H9c-1.65 0-3-1.35-3-3V3h6v6h5c1.1 0 2 .9 2 2l-2 7h1.44c.73 0 1.39.49 1.53 1.2zM5 12V3H3v9c0 2.76 2.24 5 5 5h4v-2H8c-1.66 0-3-1.34-3-3z" key="k0" />
]


const AirlineSeatLegroomReduced = ({ title, ...restProps }) => {
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
          ? [<title key="AirlineSeatLegroomReduced-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AirlineSeatLegroomReduced',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AirlineSeatLegroomReduced.displayName = 'AirlineSeatLegroomReduced'

AirlineSeatLegroomReduced.defaultProps = { height: 24, width: 24}

export default AirlineSeatLegroomReduced
