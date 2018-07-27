import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5h-3V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h3v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1h3a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM6 17H4V7h2v10zm10 2H8V5h8v14zm4-2h-2V7h2v10z" key="k0" />
]


const Carousel = ({ title, ...restProps }) => {
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
          ? [<title key="Carousel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Carousel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Carousel.displayName = 'Carousel'

Carousel.defaultProps = { height: 24, width: 24}

export default Carousel
