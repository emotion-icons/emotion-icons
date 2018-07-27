import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" key="k0" />
]


const ExpandLess = ({ title, ...restProps }) => {
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
          ? [<title key="ExpandLess-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ExpandLess',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ExpandLess.displayName = 'ExpandLess'

ExpandLess.defaultProps = { height: 24, width: 24}

export default ExpandLess
