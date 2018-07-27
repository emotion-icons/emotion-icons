import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M0 12a5.565 5.565 0 0 0 5.565 5.564c3.075 0 5.569-2.49 5.569-5.564S8.641 6.436 5.565 6.436A5.566 5.566 0 0 0 0 12zm12.866 0a5.565 5.565 0 0 0 5.567 5.564C21.496 17.564 24 15.074 24 12s-2.492-5.564-5.564-5.564A5.567 5.567 0 0 0 12.866 12z" key="k0" />
]

export const hex='#0063DC'
const Flickr = ({ title, ...restProps }) => {
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
          ? [<title key="Flickr-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Flickr',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Flickr.displayName = 'Flickr'

Flickr.defaultProps = { height: 24, width: 24}

export default Flickr
