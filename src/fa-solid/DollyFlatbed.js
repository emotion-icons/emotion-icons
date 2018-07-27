import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M208 320h384c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H448v128l-48-32-48 32V32H208c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm416 64H128V16c0-8.8-7.2-16-16-16H16C7.2 0 0 7.2 0 16v32c0 8.8 7.2 16 16 16h48v368c0 8.8 7.2 16 16 16h82.9c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H451c-1.8 5-2.9 10.4-2.9 16 0 26.5 21.5 48 48 48s48-21.5 48-48c0-5.6-1.2-11-2.9-16H624c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" key="k0" />
]


const DollyFlatbed = ({ title, ...restProps }) => {
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
          ? [<title key="DollyFlatbed-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 640 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-DollyFlatbed',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

DollyFlatbed.displayName = 'DollyFlatbed'

DollyFlatbed.defaultProps = { height: undefined, width: undefined}

export default DollyFlatbed
