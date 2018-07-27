import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 18.75l7.437-13.5H24l-7.438 13.5H0z" key="k0" />
]

export const hex='#408294'
const Bandcamp = ({ title, ...restProps }) => {
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
          ? [<title key="Bandcamp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bandcamp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bandcamp.displayName = 'Bandcamp'

Bandcamp.defaultProps = { height: 24, width: 24}

export default Bandcamp
