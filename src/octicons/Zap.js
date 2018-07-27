import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M10 7H6l3-7-9 9h4l-3 7 9-9z" key="k0" />
]


const Zap = ({ title, ...restProps }) => {
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
          ? [<title key="Zap-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 10 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Zap',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Zap.displayName = 'Zap'

Zap.defaultProps = { height: 16, width: 10}

export default Zap
