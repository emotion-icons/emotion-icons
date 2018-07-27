import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M394.6 341.2c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm-138.6 0c-29.5 0-53.4 23.9-53.4 53.4S226.5 448 256 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm-138.6 0c-29.5 0-53.4 23.9-53.4 53.4S87.9 448 117.4 448s53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm277.2-138.6c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4S448 285.5 448 256s-23.9-53.4-53.4-53.4zm-138.6 0c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zm-138.6 0C87.9 202.6 64 226.5 64 256s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4-23.9-53.4-53.4-53.4zM394.6 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S424.1 64 394.6 64zM256 64c-29.5 0-53.4 23.9-53.4 53.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S285.5 64 256 64zm-138.6 0C87.9 64 64 87.9 64 117.4s23.9 53.4 53.4 53.4 53.4-23.9 53.4-53.4S146.9 64 117.4 64z" key="k0" />
]


const Keypad = ({ title, ...restProps }) => {
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
          ? [<title key="Keypad-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Keypad',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Keypad.displayName = 'Keypad'

Keypad.defaultProps = { height: undefined, width: undefined}

export default Keypad
