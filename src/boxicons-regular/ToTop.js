import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M20 4H4v2h6.75L5.2 13.4A.999.999 0 0 0 6 15h2v4a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4h2a1.001 1.001 0 0 0 .8-1.6L13.25 6H20V4zm-5 9a1 1 0 0 0-1 1v4h-4v-4a1 1 0 0 0-1-1H8l4-5.333L16 13h-1z" key="k0" />
]


const ToTop = ({ title, ...restProps }) => {
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
          ? [<title key="ToTop-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ToTop',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ToTop.displayName = 'ToTop'

ToTop.defaultProps = { height: 24, width: 24}

export default ToTop
