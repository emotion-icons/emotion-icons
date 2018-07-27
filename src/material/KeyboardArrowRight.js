import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" key="k0" />
]


const KeyboardArrowRight = ({ title, ...restProps }) => {
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
          ? [<title key="KeyboardArrowRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-KeyboardArrowRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

KeyboardArrowRight.displayName = 'KeyboardArrowRight'

KeyboardArrowRight.defaultProps = { height: 24, width: 24}

export default KeyboardArrowRight
