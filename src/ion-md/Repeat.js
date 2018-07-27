import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M149.3 152h213.3v62.4l85.3-83.2L362.7 48v62.4h-256v124.8h42.7V152zm213.4 208H149.3v-62.4L64 380.8l85.3 83.2v-62.4h256V276.8h-42.7V360z" key="k0" />
]


const Repeat = ({ title, ...restProps }) => {
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
          ? [<title key="Repeat-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Repeat',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Repeat.displayName = 'Repeat'

Repeat.defaultProps = { height: undefined, width: undefined}

export default Repeat
