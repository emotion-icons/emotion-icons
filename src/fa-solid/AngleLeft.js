import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z" key="k0" />
]


const AngleLeft = ({ title, ...restProps }) => {
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
          ? [<title key="AngleLeft-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 256 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AngleLeft',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AngleLeft.displayName = 'AngleLeft'

AngleLeft.defaultProps = { height: undefined, width: undefined}

export default AngleLeft
