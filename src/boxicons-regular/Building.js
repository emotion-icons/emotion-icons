import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 22h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zM6 4h12v16h-4v-2h-4v2H6V4z" key="k0" />
,
<path d="M8 6h3v2H8zm5 0h3v2h-3zm-5 4h3v2H8zm5 .031h3V12h-3zM8 14h3v2H8zm5 0h3v2h-3z" key="k1" />
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
