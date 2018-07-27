import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 6h-3V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-7h3a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-5 12H6V4h10v2h-5a1 1 0 0 0-1 1v8a1 1 0 0 0 1.555.832L14.303 14H16v4z" key="k0" />
]


const MobileMessage = ({ title, ...restProps }) => {
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
          ? [<title key="MobileMessage-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MobileMessage',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MobileMessage.displayName = 'MobileMessage'

MobileMessage.defaultProps = { height: 24, width: 24}

export default MobileMessage
