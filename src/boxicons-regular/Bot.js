import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<ellipse cx={8.5} cy={12} rx={1.5} ry={2} key="k0" />
,
<ellipse cx={15.5} cy={12} rx={1.5} ry={2} key="k1" />
,
<path d="M22 11h-1V7a1 1 0 0 0-1-1h-7V4.688c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H4a1 1 0 0 0-1 1v4H2v4h1v6a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-6h1v-4zm-3 9H5V8h14v12z" key="k2" />
,
<path d="M8 16v2s6.996-.003 7.998 0l.004-2C15.001 15.998 8 16 8 16z" key="k3" />
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
