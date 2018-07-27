import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 5h18v2H3zm0 4h18v2H3zm0 4h9v2H3zm0 4h9v2H3zm17.293-3.707L18 15.586l-2.293-2.293-1.414 1.414L16.586 17l-2.293 2.293 1.414 1.414L18 18.414l2.293 2.293 1.414-1.414L19.414 17l2.293-2.293z" key="k0" />
]


const ListX = ({ title, ...restProps }) => {
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
          ? [<title key="ListX-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListX',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListX.displayName = 'ListX'

ListX.defaultProps = { height: 24, width: 24}

export default ListX
