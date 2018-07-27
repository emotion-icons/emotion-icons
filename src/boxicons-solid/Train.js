import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.871 3.335C17.715 2.037 16.509 2 16.375 2H7.621c-.224 0-1.399.065-2.503 1.351C4.031 4.616 4 5.862 4 6v13a1 1 0 0 0 1 1h2l-2 2h14l-2-2h2a1 1 0 0 0 1-1V6c.001-.187-.032-1.434-1.129-2.665zM14 4v2h-4V4M8 17H6v-2h2v2zm10 0h-2v-2h2v2zm0-5H6V8h12v4z" key="k0" />
]


const Train = ({ title, ...restProps }) => {
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
          ? [<title key="Train-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Train',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Train.displayName = 'Train'

Train.defaultProps = { height: 24, width: 24}

export default Train
