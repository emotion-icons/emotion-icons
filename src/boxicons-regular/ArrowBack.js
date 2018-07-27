import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M13.207 16.293L9.914 13H18v-2H9.914l3.293-3.293-1.414-1.414L6.086 12l5.707 5.707z" key="k0" />
]


const ArrowBack = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowBack-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowBack',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowBack.displayName = 'ArrowBack'

ArrowBack.defaultProps = { height: 24, width: 24}

export default ArrowBack
