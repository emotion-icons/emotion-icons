import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M144 176c44.1 0 80 35.9 80 80s-35.9 80-80 80-80-35.9-80-80 35.9-80 80-80m0-64C64.5 112 0 176.5 0 256s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z" key="k0" />
]


const Genderless = ({ title, ...restProps }) => {
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
          ? [<title key="Genderless-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 288 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Genderless',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Genderless.displayName = 'Genderless'

Genderless.defaultProps = { height: undefined, width: undefined}

export default Genderless
