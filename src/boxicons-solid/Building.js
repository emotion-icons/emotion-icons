import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 22h5v-4h4v4h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zm8-16h3v2h-3V6zm0 4h3v2h-3v-2zm0 4h3v2h-3v-2zM8 6h3v2H8V6zm0 4h3v2H8v-2zm0 4h3v2H8v-2z" key="k0" />
]


const Building = ({ title, ...restProps }) => {
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
          ? [<title key="Building-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Building',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Building.displayName = 'Building'

Building.defaultProps = { height: 24, width: 24}

export default Building
