import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.29 16.752V7.2H6.546V4.8h6.328v2.4h-1.746v9.574h3.925v-2.618h2.839V19.2H6.545v-2.448h1.746zM0 12c0 6.628 5.372 12 12 12s12-5.372 12-12S18.628 0 12 0 0 5.372 0 12z" key="k0" />
]

export const hex='#00D735'
const Letterboxd = ({ title, ...restProps }) => {
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
          ? [<title key="Letterboxd-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Letterboxd',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Letterboxd.displayName = 'Letterboxd'

Letterboxd.defaultProps = { height: 24, width: 24}

export default Letterboxd
