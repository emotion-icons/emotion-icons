import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M256 464c114.875 0 208-93.125 208-208S370.875 48 256 48 48 141.125 48 256s93.125 208 208 208zm-32-112V160l96 96-96 96z" key="k0" />
]


const ArrowDroprightCircle = ({ title, ...restProps }) => {
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
          ? [<title key="ArrowDroprightCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ArrowDroprightCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ArrowDroprightCircle.displayName = 'ArrowDroprightCircle'

ArrowDroprightCircle.defaultProps = { height: undefined, width: undefined}

export default ArrowDroprightCircle
