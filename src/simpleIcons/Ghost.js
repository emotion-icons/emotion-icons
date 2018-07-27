import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9.604 19.199H.008V24h9.597v-4.801zm14.39 0h-9.591V24h9.591v-4.801zm.003-9.599H0v4.8h23.997V9.6zM24 0h-4.801v4.801H24V0zm-9.596 0H.008v4.801h14.396V0z" key="k0" />
]

export const hex='#738A94'
const Ghost = ({ title, ...restProps }) => {
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
          ? [<title key="Ghost-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Ghost',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Ghost.displayName = 'Ghost'

Ghost.defaultProps = { height: 24, width: 24}

export default Ghost
