import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 7V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v3.586l-1.707 1.707A.996.996 0 0 0 5 14v2a1 1 0 0 0 1 1h5v3l1 2 1-2v-3h5a1 1 0 0 0 1-1v-2a.996.996 0 0 0-.293-.707L17 11.586V8a1 1 0 0 0 1-1zM8 4h8v2H8V4zm7.293 8.707L17 14.414V15H7v-.586l1.707-1.707A.996.996 0 0 0 9 12V8h6v4c0 .266.105.52.293.707z" key="k0" />
]


const Pin = ({ title, ...restProps }) => {
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
          ? [<title key="Pin-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Pin',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Pin.displayName = 'Pin'

Pin.defaultProps = { height: 24, width: 24}

export default Pin
