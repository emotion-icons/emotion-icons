import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8h2V6h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3H3v2h2v13zm6-3H9v-8h2v8zm4 0h-2v-8h2v8zM10 4h4v2h-4V4z" key="k0" />
]


const Trash = ({ title, ...restProps }) => {
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
          ? [<title key="Trash-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Trash',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Trash.displayName = 'Trash'

Trash.defaultProps = { height: 24, width: 24}

export default Trash
