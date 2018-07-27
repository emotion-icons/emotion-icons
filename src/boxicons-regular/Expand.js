import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15.707 9.707l3.172-3.172L21 8.656V3h-5.656l2.121 2.121-3.172 3.172zm1.758 9.172L15.344 21H21v-5.656l-2.121 2.121-3.172-3.172-1.414 1.414zm-9.172-4.586l-3.172 3.172L3 15.344V21h5.656l-2.121-2.121 3.172-3.172zM6.535 5.121L8.656 3H3v5.656l2.121-2.121 3.172 3.172 1.414-1.414z" key="k0" />
]


const Expand = ({ title, ...restProps }) => {
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
          ? [<title key="Expand-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Expand',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Expand.displayName = 'Expand'

Expand.defaultProps = { height: 24, width: 24}

export default Expand
