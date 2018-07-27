import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M224 150.7l42.9 160.7h-85.8L224 150.7zM448 80v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48zm-65.3 325.3l-94.5-298.7H159.8L65.3 405.3H156l111.7-91.6 24.2 91.6h90.8z" key="k0" />
]


const Buysellads = ({ title, ...restProps }) => {
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
          ? [<title key="Buysellads-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 448 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Buysellads',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Buysellads.displayName = 'Buysellads'

Buysellads.defaultProps = { height: undefined, width: undefined}

export default Buysellads
