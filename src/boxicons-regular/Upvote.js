import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9 22h6a1 1 0 0 0 1-1v-7h4a1.001 1.001 0 0 0 .781-1.625l-8-10c-.381-.475-1.181-.475-1.562 0l-8 10A1.001 1.001 0 1 0 4 14h4v7a1 1 0 0 0 1 1zM6.081 12L12 4.601 17.919 12H15a1 1 0 0 0-1 1v7h-4v-7a1 1 0 0 0-1-1H6.081z" key="k0" />
]


const Upvote = ({ title, ...restProps }) => {
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
          ? [<title key="Upvote-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Upvote',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Upvote.displayName = 'Upvote'

Upvote.defaultProps = { height: 24, width: 24}

export default Upvote
