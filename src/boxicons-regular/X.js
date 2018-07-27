import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6.707 18.707L12 13.414l5.293 5.293 1.414-1.414L13.414 12l5.293-5.293-1.414-1.414L12 10.586 6.707 5.293 5.293 6.707 10.586 12l-5.293 5.293z" key="k0" />
]


const X = ({ title, ...restProps }) => {
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
          ? [<title key="X-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-X',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

X.displayName = 'X'

X.defaultProps = { height: 24, width: 24}

export default X
