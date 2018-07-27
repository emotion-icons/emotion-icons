import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 10h-1.153l-.86-5.164A1.002 1.002 0 0 0 18 4H6a1 1 0 0 0-.986.836L4.153 10H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h10v2a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM6.847 6h10.307l.666 4H6.181l.666-4zM20 16H4v-4h16v4z" key="k0" />
,
<path d="M5 13h2v2H5zm12 0h2v2h-2z" key="k1" />
]


const Car = ({ title, ...restProps }) => {
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
          ? [<title key="Car-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Car',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Car.displayName = 'Car'

Car.defaultProps = { height: 24, width: 24}

export default Car
