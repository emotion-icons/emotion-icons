import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" key="k0" />
]


const EllipsisV = ({ title, ...restProps }) => {
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
          ? [<title key="EllipsisV-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 192 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-EllipsisV',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

EllipsisV.displayName = 'EllipsisV'

EllipsisV.defaultProps = { height: undefined, width: undefined}

export default EllipsisV
