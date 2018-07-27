import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M96 348h320v36H96zm0-220h320v36H96zm0 72.7h320v35.6H96zm0 75.1h320v35.6H96z" key="k0" />
]


const Reorder = ({ title, ...restProps }) => {
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
          ? [<title key="Reorder-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Reorder',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Reorder.displayName = 'Reorder'

Reorder.defaultProps = { height: undefined, width: undefined}

export default Reorder
