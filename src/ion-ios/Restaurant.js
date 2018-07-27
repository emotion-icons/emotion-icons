import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M384 64c-24.8 0-48 77.3-48 160 0 57 32 80 32 80v128c0 8.8 7.2 16 16 16s16-7.2 16-16V75c0-11-11-11-16-11zm-96 0l10 104c0 4.4-3.6 8-8 8s-8-3.6-8-8l-6-104h-8l-6 104c0 4.4-3.6 8-8 8s-8-3.6-8-8l10-104h-8s-24 107.2-24 128 13.4 38.6 32 45.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V237.2c18.6-6.6 32-24.2 32-45.2S296 64 296 64h-8zm-128 0c-26.5 0-48 64-48 128 0 20.8 13.4 38.6 32 45.2V432c0 8.8 7.2 16 16 16s16-7.2 16-16V237.2c18.6-6.6 32-24.2 32-45.2 0-64-21.5-128-48-128z" key="k0" />
]


const Restaurant = ({ title, ...restProps }) => {
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
          ? [<title key="Restaurant-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Restaurant',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Restaurant.displayName = 'Restaurant'

Restaurant.defaultProps = { height: undefined, width: undefined}

export default Restaurant
