import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM9 19.411V18l-1-1-2-2v-2l-1-2h-.931A8.008 8.008 0 0 1 11 4.069V5l-1 2-1 1-1 1-1 2 1 2h1l1 1h2v2l-1 2-.884 1.767A7.926 7.926 0 0 1 9 19.411zm8.654-1.757L17 17l-1-2-1-1-1-.984L15 12l2-1v-1l-1-1 1-2V5.765a7.984 7.984 0 0 1 .654 11.889z" key="k0" />
]


const World = ({ title, ...restProps }) => {
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
          ? [<title key="World-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-World',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

World.displayName = 'World'

World.defaultProps = { height: 24, width: 24}

export default World
