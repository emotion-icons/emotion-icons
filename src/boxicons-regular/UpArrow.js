import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.844 5.463c-.367-.576-1.32-.576-1.688 0l-7 11a1.003 1.003 0 0 0-.033 1.019c.176.319.512.518.877.518h14a1.001 1.001 0 0 0 .844-1.538l-7-10.999zM6.821 16L12 7.863 17.179 16H6.821z" key="k0" />
]


const UpArrow = ({ title, ...restProps }) => {
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
          ? [<title key="UpArrow-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-UpArrow',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

UpArrow.displayName = 'UpArrow'

UpArrow.defaultProps = { height: 24, width: 24}

export default UpArrow
