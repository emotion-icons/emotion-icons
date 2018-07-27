import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M64 199.9v208.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V199.9c0-4.4-3.5-7.9-7.9-7.9H71.9c-4.4 0-7.9 3.5-7.9 7.9zM199.9 96c-4.4 0-7.9 3.5-7.9 7.9V416h120.1c4.4 0 7.9-3.5 7.9-7.9V103.9c0-4.4-3.5-7.9-7.9-7.9H199.9zm240.2 160h-96.2c-4.4 0-7.9 3.5-7.9 7.9v144.2c0 4.4 3.5 7.9 7.9 7.9h96.2c4.4 0 7.9-3.5 7.9-7.9V263.9c0-4.4-3.5-7.9-7.9-7.9z" key="k0" />
]


const Podium = ({ title, ...restProps }) => {
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
          ? [<title key="Podium-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Podium',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Podium.displayName = 'Podium'

Podium.defaultProps = { height: undefined, width: undefined}

export default Podium
