import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M22.017 22.67H1.984c-.77 0-1.388-.383-1.694-1.002a1.871 1.871 0 0 1 0-2.002L10.304 2.33c.385-.615 1.002-1 1.695-1 .77 0 1.386.385 1.69 1l10.02 17.336c.387.617.387 1.39 0 2.002-.31.695-.927 1.002-1.693 1.002z" key="k0" />
]

export const hex='#007CC3'
const Garmin = ({ title, ...restProps }) => {
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
          ? [<title key="Garmin-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Garmin',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Garmin.displayName = 'Garmin'

Garmin.defaultProps = { height: 24, width: 24}

export default Garmin
