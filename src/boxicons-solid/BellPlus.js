import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 13.838V10c0-3.94-2.942-7.34-6.906-7.915l-1.013-.082a1.082 1.082 0 0 0-.161 0l-1.063.087C6.948 2.652 4 6.053 4 10v3.838l-.948 2.846A1 1 0 0 0 4 18h16.02a1 1 0 0 0 .869-1.495L20 13.838zM16 11h-3v3h-2v-3H8V9h3V6h2v3h3v2zm-4 10.5c1.387 0 2.5-1.113 2.5-2.5h-5c0 1.387 1.113 2.5 2.5 2.5z" key="k0" />
]


const BellPlus = ({ title, ...restProps }) => {
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
          ? [<title key="BellPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-BellPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

BellPlus.displayName = 'BellPlus'

BellPlus.defaultProps = { height: 24, width: 24}

export default BellPlus
