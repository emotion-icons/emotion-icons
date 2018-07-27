import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M176 432c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80zM25.26 25.199l13.6 272C39.499 309.972 50.041 320 62.83 320h66.34c12.789 0 23.331-10.028 23.97-22.801l13.6-272C167.425 11.49 156.496 0 142.77 0H49.23C35.504 0 24.575 11.49 25.26 25.199z" key="k0" />
]


const Exclamation = ({ title, ...restProps }) => {
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
          ? [<title key="Exclamation-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 192 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Exclamation',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Exclamation.displayName = 'Exclamation'

Exclamation.defaultProps = { height: undefined, width: undefined}

export default Exclamation
