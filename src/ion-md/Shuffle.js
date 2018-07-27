import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M222.2 188.1L97.8 64 64 97.8l124.1 124.1 34.1-33.8zM316 64l49 49L64 414.2 97.8 448 399 147l49 49V64H316zm7.9 225.8l-33.8 33.8 75.1 75.1L316 448h132V316l-49 49-75.1-75.2z" key="k0" />
]


const Shuffle = ({ title, ...restProps }) => {
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
          ? [<title key="Shuffle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Shuffle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Shuffle.displayName = 'Shuffle'

Shuffle.defaultProps = { height: undefined, width: undefined}

export default Shuffle
