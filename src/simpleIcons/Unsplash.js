import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.6 13.575a3.6 3.6 0 1 1-3.6-3.6c2.025.075 3.6 1.65 3.6 3.6zm8.4-5.55V19.2c0 1.725-1.425 3.225-3.225 3.225H3.225A3.201 3.201 0 0 1 0 19.2V7.95c0-1.725 1.425-3.225 3.225-3.225H6L6.6 3c.3-.825 1.275-1.5 2.175-1.5h6.45c.9 0 1.875.675 2.175 1.5l.6 1.8h2.775C22.575 4.8 24 6.225 24 8.025zm-6.45 5.625a5.617 5.617 0 0 0-5.625-5.625c-3.075 0-5.625 2.55-5.625 5.625a5.617 5.617 0 0 0 5.625 5.625c3.15-.075 5.625-2.55 5.625-5.625z" key="k0" />
]

export const hex='#000000'
const Unsplash = ({ title, ...restProps }) => {
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
          ? [<title key="Unsplash-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Unsplash',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Unsplash.displayName = 'Unsplash'

Unsplash.defaultProps = { height: 24, width: 24}

export default Unsplash
