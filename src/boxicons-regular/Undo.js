import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 16h5.657l-2.061-2.062C8.529 12.326 10.492 11 13 11c3.436 0 5 2.592 5 5h2c0-3.479-2.404-7-7-7-3.089 0-5.517 1.511-6.855 3.488L4 10.343V16z" key="k0" />
]


const Undo = ({ title, ...restProps }) => {
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
          ? [<title key="Undo-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Undo',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Undo.displayName = 'Undo'

Undo.defaultProps = { height: 24, width: 24}

export default Undo
