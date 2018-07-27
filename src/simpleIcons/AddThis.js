import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18 13.496h-4.501v4.484h-3v-4.484H6v-2.99h4.5V6.021h3.001v4.485H18v2.99zM21 .041H3a3.004 3.004 0 0 0-3 2.99v17.94a3.004 3.004 0 0 0 3 2.988h18a3.005 3.005 0 0 0 3-2.988V3.031a3.005 3.005 0 0 0-3-2.99z" key="k0" />
]

export const hex='#FF6550'
const AddThis = ({ title, ...restProps }) => {
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
          ? [<title key="AddThis-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-AddThis',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

AddThis.displayName = 'AddThis'

AddThis.defaultProps = { height: 24, width: 24}

export default AddThis
