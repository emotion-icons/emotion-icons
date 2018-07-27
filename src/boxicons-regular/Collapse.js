import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4.707 20.707l3.172-3.172L10 19.656V14H4.344l2.121 2.121-3.172 3.172zM19.293 3.293l-3.172 3.172L14 4.344V10h5.656l-2.121-2.121 3.172-3.172zM14 14v5.656l2.121-2.121 3.172 3.172 1.414-1.414-3.172-3.172L19.656 14zm-4-9.656L7.879 6.465 4.707 3.293 3.293 4.707l3.172 3.172L4.344 10H10z" key="k0" />
]


const Collapse = ({ title, ...restProps }) => {
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
          ? [<title key="Collapse-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Collapse',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Collapse.displayName = 'Collapse'

Collapse.defaultProps = { height: 24, width: 24}

export default Collapse
