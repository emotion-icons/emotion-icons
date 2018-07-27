import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z" key="k0" />
]


const CallReceived = ({ title, ...restProps }) => {
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
          ? [<title key="CallReceived-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-CallReceived',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

CallReceived.displayName = 'CallReceived'

CallReceived.defaultProps = { height: 24, width: 24}

export default CallReceived
