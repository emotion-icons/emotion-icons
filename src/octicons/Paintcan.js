import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M6 0C2.69 0 0 2.69 0 6v1c0 .55.45 1 1 1v5c0 1.1 2.24 2 5 2s5-.9 5-2V8c.55 0 1-.45 1-1V6c0-3.31-2.69-6-6-6zm3 10v.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5V10c0-.28-.22-.5-.5-.5s-.5.22-.5.5v2.5c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-2c0-.28-.22-.5-.5-.5s-.5.22-.5.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-1c-.55 0-1-.45-1-1V7.2c.91.49 2.36.8 4 .8 1.64 0 3.09-.31 4-.8V9c0 .55-.45 1-1 1zM6 7c-1.68 0-3.12-.41-3.71-1C2.88 5.41 4.32 5 6 5c1.68 0 3.12.41 3.71 1-.59.59-2.03 1-3.71 1zm0-3c-2.76 0-5 .89-5 2 0-2.76 2.24-5 5-5s5 2.24 5 5c0-1.1-2.24-2-5-2z" key="k0" />
]


const Paintcan = ({ title, ...restProps }) => {
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
          ? [<title key="Paintcan-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 12 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Paintcan',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Paintcan.displayName = 'Paintcan'

Paintcan.defaultProps = { height: 16, width: 12}

export default Paintcan
