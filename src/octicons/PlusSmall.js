import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M4 4H3v3H0v1h3v3h1V8h3V7H4V4z" key="k0" />
]


const PlusSmall = ({ title, ...restProps }) => {
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
          ? [<title key="PlusSmall-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 7 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PlusSmall',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PlusSmall.displayName = 'PlusSmall'

PlusSmall.defaultProps = { height: 16, width: 7}

export default PlusSmall
