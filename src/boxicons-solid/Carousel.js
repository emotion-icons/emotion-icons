import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7 21h10a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1zm-4-2h1V5H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM21 5h-1v14h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1z" key="k0" />
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
