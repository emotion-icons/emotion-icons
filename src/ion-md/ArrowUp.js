import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M277.375 427V167.296l119.702 119.702L427 256 256 85 85 256l29.924 29.922 119.701-118.626V427h42.75z" key="k0" />
]


const ArrowUp = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowUp-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowUp',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowUp.displayName = 'ArrowUp'

ArrowUp.defaultProps = { height: undefined, width: undefined}

export default ArrowUp
