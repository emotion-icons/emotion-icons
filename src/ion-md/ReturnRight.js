import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M32 136v144h357.7l-84.4 86.2 33.2 33.8L480 256 338.5 112l-33.2 33.8 84.4 86.2H79.2v-96H32z" key="k0" />
]


const ReturnRight = ({ title, ...restProps }) => {
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
          ? [<title key="ReturnRight-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ReturnRight',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ReturnRight.displayName = 'ReturnRight'

ReturnRight.defaultProps = { height: undefined, width: undefined}

export default ReturnRight
