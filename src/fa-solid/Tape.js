import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M224 192c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64-28.7-64-64-64zm400 224H380.6c41.5-40.7 67.4-97.3 67.4-160 0-123.7-100.3-224-224-224S0 132.3 0 256s100.3 224 224 224h400c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400-64c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" key="k0" />
]


const Tape = ({ title, ...restProps }) => {
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
          ? [<title key="Tape-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 640 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Tape',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Tape.displayName = 'Tape'

Tape.defaultProps = { height: undefined, width: undefined}

export default Tape
