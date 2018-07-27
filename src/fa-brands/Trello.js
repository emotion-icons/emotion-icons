import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M392 32H56C25.1 32 0 57.1 0 88v336c0 30.9 25.1 56 56 56h336c30.9 0 56-25.1 56-56V88c0-30.9-25.1-56-56-56zM194.9 371.4c0 14.8-12 26.9-26.9 26.9H85.1c-14.8 0-26.9-12-26.9-26.9V117.1c0-14.8 12-26.9 26.9-26.9H168c14.8 0 26.9 12 26.9 26.9v254.3zm194.9-112c0 14.8-12 26.9-26.9 26.9H280c-14.8 0-26.9-12-26.9-26.9V117.1c0-14.8 12-26.9 26.9-26.9h82.9c14.8 0 26.9 12 26.9 26.9v142.3z" key="k0" />
]


const Trello = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Trello-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Trello',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Trello.displayName = 'Trello'

Trello.defaultProps = { height: undefined, width: undefined}

export default Trello
