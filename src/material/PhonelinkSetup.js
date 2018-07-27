import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11.8 12.5v-1l1.1-.8c.1-.1.1-.2.1-.3l-1-1.7c-.1-.1-.2-.2-.3-.1l-1.3.4c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.3-.2H7c-.1 0-.2.1-.3.2l-.2 1.3c-.3.1-.6.3-.9.5l-1.3-.5c-.1 0-.2 0-.3.1l-1 1.7c-.1.1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.2-.1.3-.1.4l1 1.7c.1.1.2.2.3.1l1.4-.4c.3.2.6.4.9.5l.2 1.3c-.1.1.1.2.2.2h2c.1 0 .2-.1.3-.2l.2-1.3c.3-.1.6-.3.9-.5l1.3.5c.1 0 .2 0 .3-.1l1-1.7c.1-.1 0-.2-.1-.3l-1.1-.9zM8 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 1H9c-1.1 0-2 .9-2 2v3h2V4h10v16H9v-2H7v3c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" key="k0" />
]


const PhonelinkSetup = ({ title, ...restProps }) => {
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
          ? [<title key="PhonelinkSetup-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PhonelinkSetup',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PhonelinkSetup.displayName = 'PhonelinkSetup'

PhonelinkSetup.defaultProps = { height: 24, width: 24}

export default PhonelinkSetup
