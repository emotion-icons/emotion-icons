import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z" key="k0" />
]


const Grabber = ({ title, ...restProps }) => {
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
          ? [<title key="Grabber-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 8 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Grabber',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Grabber.displayName = 'Grabber'

Grabber.defaultProps = { height: 16, width: 8}

export default Grabber
