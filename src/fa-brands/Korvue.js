import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M386.5 34h-327C26.8 34 0 60.8 0 93.5v327.1C0 453.2 26.8 480 59.5 480h327.1c33 0 59.5-26.8 59.5-59.5v-327C446 60.8 419.2 34 386.5 34zM87.1 120.8h96v116l61.8-116h110.9l-81.2 132H87.1v-132zm161.8 272.1l-65.7-113.6v113.6h-96V262.1h191.5l88.6 130.8H248.9z" key="k0" />
]


const Korvue = ({ title, ...restProps }) => {
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
          ? [<title key="Korvue-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 446 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Korvue',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Korvue.displayName = 'Korvue'

Korvue.defaultProps = { height: undefined, width: undefined}

export default Korvue
