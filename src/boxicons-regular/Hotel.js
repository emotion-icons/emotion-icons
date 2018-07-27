import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<circle cx={7} cy={12} r={2} key="k0" />
,
<path d="M15 9h-4a1 1 0 0 0-1 1v5H4V6H2v14h2v-3h16v3h2v-4c0-2.421-1.463-7-7-7zm-3 6v-4h3c3.613 0 4.617 2.52 4.895 4H12z" key="k1" />
]


const Hotel = ({ title, ...restProps }) => {
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
          ? [<title key="Hotel-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Hotel',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Hotel.displayName = 'Hotel'

Hotel.defaultProps = { height: 24, width: 24}

export default Hotel
