import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-5.967 6l-3.284-4h2.782l3.333 4h-2.831zm-2.669 0H9.469L6.135 6h2.896l3.333 4zm-5.499 0H4V6.563L6.865 10zM20 9.438L17.136 6H20v3.438z" key="k0" />
]


const Movie = ({ title, ...restProps }) => {
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
          ? [<title key="Movie-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Movie',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Movie.displayName = 'Movie'

Movie.defaultProps = { height: 24, width: 24}

export default Movie
