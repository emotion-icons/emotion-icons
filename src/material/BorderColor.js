import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17.75 7L14 3.25l-10 10V17h3.75l10-10zm2.96-2.96a.996.996 0 0 0 0-1.41L18.37.29a.996.996 0 0 0-1.41 0L15 2.25 18.75 6l1.96-1.96z" key="k0" />
,
<path fillOpacity={.36} d="M0 20h24v4H0z" key="k1" />
]


const BorderColor = ({ title, ...restProps }) => {
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
          ? [<title key="BorderColor-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BorderColor',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BorderColor.displayName = 'BorderColor'

BorderColor.defaultProps = { height: 24, width: 24}

export default BorderColor
