import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.979 9.652A5.005 5.005 0 0 0 17 5H7a4.97 4.97 0 0 0-4.987 4.737c-.01.079-.013.161-.013.253v6.51c0 .925.373 1.828 1.022 2.476A3.524 3.524 0 0 0 5.5 20c1.8 0 2.854-1.004 4.19-2.276.236-.226 1.1-.646 1.54-.751.25-.059 1.289-.059 1.539 0 .44.104 1.304.525 1.541.752C15.646 18.996 16.7 20 18.5 20c.925 0 1.828-.373 2.476-1.022A3.524 3.524 0 0 0 22 16.5V10c0-.095-.004-.18-.014-.26l-.007-.088zM8 13a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 13zm8-5a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-2 4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2 2a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm2-2a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" key="k0" />
]


const Joystick = ({ title, ...restProps }) => {
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
          ? [<title key="Joystick-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Joystick',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Joystick.displayName = 'Joystick'

Joystick.defaultProps = { height: 24, width: 24}

export default Joystick
