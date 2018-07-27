import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M261 149.3V64H48v384h416V149.3H261zm-127.8 256H90.6v-42.7h42.6v42.7zm0-85.3H90.6v-42.7h42.6V320zm0-85.3H90.6V192h42.6v42.7zm0-85.4H90.6v-42.7h42.6v42.7zm85.2 256h-42.6v-42.7h42.6v42.7zm0-85.3h-42.6v-42.7h42.6V320zm0-85.3h-42.6V192h42.6v42.7zm0-85.4h-42.6v-42.7h42.6v42.7zm203 256H261v-42.7h42.6V320H261v-42.7h42.6v-42.7H261V192h160.4v213.3zm-37.6-170.6h-42.6v42.7h42.6v-42.7zm0 85.3h-42.6v42.7h42.6V320z" key="k0" />
]


const Business = ({ title, ...restProps }) => {
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
          ? [<title key="Business-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Business',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Business.displayName = 'Business'

Business.defaultProps = { height: undefined, width: undefined}

export default Business
