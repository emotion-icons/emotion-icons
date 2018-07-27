import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20.999 4H3.201c-.584-.12-1.202.358-1.202.979V19a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-13.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM12 16H5.999l3-4 1.364 1.818L14 8l3.999 8H12z" key="k0" />
]


const Image = ({ title, ...restProps }) => {
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
          ? [<title key="Image-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Image',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Image.displayName = 'Image'

Image.defaultProps = { height: 24, width: 24}

export default Image
