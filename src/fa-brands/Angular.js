import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M169.7 268.1h76.2l-38.1-91.6-38.1 91.6zM207.8 32L0 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7L207.8 32zM338 373.8h-48.6l-26.2-65.4H152.6l-26.2 65.4H77.7L207.8 81.5 338 373.8z" key="k0" />
]


const Angular = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Angular-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 415 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Angular',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Angular.displayName = 'Angular'

Angular.defaultProps = { height: undefined, width: undefined}

export default Angular
