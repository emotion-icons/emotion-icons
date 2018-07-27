import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 11a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723V13c0 2.206 1.794 4 4 4h2v1.277A1.99 1.99 0 0 0 10 20a2 2 0 0 0 4 0c0-.738-.404-1.376-1-1.723V14h2c2.206 0 4-1.794 4-4h1V6h-4v4h1c0 1.103-.897 2-2 2h-2V6h2l-3-4-3 4h2v9H9c-1.103 0-2-.897-2-2v-.277c.596-.347 1-.985 1-1.723z" key="k0" />
]


const Usb = ({ title, ...restProps }) => {
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
          ? [<title key="Usb-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Usb',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Usb.displayName = 'Usb'

Usb.defaultProps = { height: 24, width: 24}

export default Usb
