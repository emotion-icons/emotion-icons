import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M10 11h8v2h-8zm0-4h11v2H10zm0 8h4.967v2H10zm-8 3l4 4 4-4H7V6h3L6 2 2 6h3v12z" key="k0" />
]


const SortAlt = ({ title, ...restProps }) => {
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
          ? [<title key="SortAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-SortAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

SortAlt.displayName = 'SortAlt'

SortAlt.defaultProps = { height: 24, width: 24}

export default SortAlt
