import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M32 432h2.9c1.8 0 3.5-1.1 4.1-2.8 2.2-5.7 8.3-19.8 21.4-39.7 21.5-32.7 58.4-67.4 94.5-83.5 27.6-12.4 53-21.5 97.1-23.2 2.3-.1 4.2 1.7 4.2 4v81.6c0 3.2 3.6 5.1 6.2 3.4l215.9-142.2c2.4-1.6 2.4-5.1 0-6.7l-216-142.2c-2.7-1.8-6.2.1-6.2 3.4v82.6c0 2.2-1.7 3.9-3.8 4-71.6 3.8-123.1 24.8-163.4 65.5-61 61.6-56.8 139.1-56.8 158.7 0 10.3-.1 25.3-.1 37.1z" key="k0" />
]


const Redo = ({ title, ...restProps }) => {
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
          ? [<title key="Redo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Redo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Redo.displayName = 'Redo'

Redo.defaultProps = { height: undefined, width: undefined}

export default Redo
