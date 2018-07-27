import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M2.089 0L.525 4.175v16.694h5.736V24h3.132l3.127-3.132h4.695l6.26-6.258V0H2.089zm2.086 2.085H21.39v11.479l-3.652 3.652H12l-3.127 3.127v-3.127H4.175V2.085z" key="k0" />
,
<path d="M9.915 12.522H12v-6.26H9.915v6.26zm5.735 0h2.086v-6.26H15.65v6.26z" key="k1" />
]

export const hex='#6441A4'
const Twitch = ({ title, ...restProps }) => {
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
          ? [<title key="Twitch-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Twitch',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Twitch.displayName = 'Twitch'

Twitch.defaultProps = { height: 24, width: 24}

export default Twitch
