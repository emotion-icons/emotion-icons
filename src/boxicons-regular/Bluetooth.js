import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5.621 17.784L10 14.317V21a1.001 1.001 0 0 0 1.6.8l6-4.5a1 1 0 0 0 .021-1.584L12.927 12l4.694-3.716A1.001 1.001 0 0 0 17.6 6.7l-6-4.5A1.001 1.001 0 0 0 10 3v6.683L5.621 6.216 4.379 7.784 9.705 12l-5.326 4.216 1.242 1.568zM12 5l3.362 2.521L12 10.183V5zm0 8.817l3.362 2.662L12 19v-5.183z" key="k0" />
]


const Bluetooth = ({ title, ...restProps }) => {
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
          ? [<title key="Bluetooth-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bluetooth',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bluetooth.displayName = 'Bluetooth'

Bluetooth.defaultProps = { height: 24, width: 24}

export default Bluetooth
