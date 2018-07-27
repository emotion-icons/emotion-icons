import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.4 17.7c-2 2.6-1 4.8-.3 5.9.3.4-.1.4-.3.4a6 6 0 0 1-4-2.7c-.2-.1-.3-.2-.5-.1-1.4.4-2.8.7-4.3.6C5.4 21.8 0 17 0 11 0 5 5.4 0 12 0s12 4.9 12 11c0 2.5-1 4.8-2.6 6.7zM12 14l3.2 2.2a.4.4 0 0 0 .6-.4L14.6 12l3.1-2.4a.4.4 0 0 0-.2-.6h-3.9l-1.3-3.8a.4.4 0 0 0-.6 0L10.4 9h-4a.4.4 0 0 0-.1.7l3 2.4-1 3.7a.4.4 0 0 0 .5.4L12 14z" key="k0" />
]

export const hex='#FD8308'
const Microblog = ({ title, ...restProps }) => {
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
          ? [<title key="Microblog-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Microblog',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Microblog.displayName = 'Microblog'

Microblog.defaultProps = { height: 24, width: 24}

export default Microblog
