import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22 11h-1V7a1 1 0 0 0-1-1h-7V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H4a1 1 0 0 0-1 1v4H2v4h1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6h1v-4zM7 12c0-1.104.672-2 1.5-2s1.5.896 1.5 2-.672 2-1.5 2S7 13.104 7 12zm8.998 6c-1.001-.003-7.997 0-7.998 0v-2s7.001-.002 8.002 0l-.004 2zm-.498-4c-.828 0-1.5-.896-1.5-2s.672-2 1.5-2 1.5.896 1.5 2-.672 2-1.5 2z" key="k0" />
]


const Bot = ({ title, ...restProps }) => {
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
          ? [<title key="Bot-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bot',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bot.displayName = 'Bot'

Bot.defaultProps = { height: 24, width: 24}

export default Bot
