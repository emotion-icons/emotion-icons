import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" key="k0" />
]


const KeyboardArrowDown = ({ title, ...restProps }) => {
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
          ? [<title key="KeyboardArrowDown-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-KeyboardArrowDown',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

KeyboardArrowDown.displayName = 'KeyboardArrowDown'

KeyboardArrowDown.defaultProps = { height: 24, width: 24}

export default KeyboardArrowDown
