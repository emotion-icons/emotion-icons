import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M475.9 246.2l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l54.9 54.9-161.8.5.5-161.8 54.9 54.9c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6l-79.4-79.4c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l54.9-54.9.5 161.8-161.8-.5 54.9-54.9c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-79.4 79.4c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l.2-.2c5.4-5.4 5.4-14.2 0-19.6L80 270.5l161.8-.5-.5 161.8-54.9-54.9c-5.4-5.4-14.2-5.4-19.6 0l-.2.2c-5.4 5.4-5.4 14.2 0 19.6l79.4 79.4c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.4-5.4 5.4-14.2 0-19.6l-.2-.2c-5.4-5.4-14.2-5.4-19.6 0l-54.9 54.9-.5-161.8 161.8.5-54.9 54.9c-5.4 5.4-5.4 14.2 0 19.6l.2.2c5.4 5.4 14.2 5.4 19.6 0l79.4-79.4c5.5-5.4 5.5-14.2 0-19.6z" key="k0" />
]


const Move = ({ title, ...restProps }) => {
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
          ? [<title key="Move-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Move',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Move.displayName = 'Move'

Move.defaultProps = { height: undefined, width: undefined}

export default Move
