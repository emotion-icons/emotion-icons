import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" key="k0" />
]


const ExpandMore = ({ title, ...restProps }) => {
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
          ? [<title key="ExpandMore-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ExpandMore',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ExpandMore.displayName = 'ExpandMore'

ExpandMore.defaultProps = { height: 24, width: 24}

export default ExpandMore
