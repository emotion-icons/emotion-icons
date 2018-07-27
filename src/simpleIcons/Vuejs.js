import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19.197 1.608l.003-.006h-4.425L12 6.4v.002l-2.772-4.8H4.803v.005H0l12 20.786L24 1.608" key="k0" />
]

export const hex='#4FC08D'
const Vuejs = ({ title, ...restProps }) => {
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
          ? [<title key="Vuejs-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Vuejs',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Vuejs.displayName = 'Vuejs'

Vuejs.defaultProps = { height: 24, width: 24}

export default Vuejs
