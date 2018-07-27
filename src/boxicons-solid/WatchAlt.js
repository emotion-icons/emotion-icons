import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 7v10a1 1 0 0 0 1 1h.22l.811 3.242c.111.446.51.758.969.758h7c.459 0 .858-.313.97-.758L16.78 18H17a1 1 0 0 0 1-1v-3h1v-4h-1V7a1 1 0 0 0-1-1h-.22l-.81-3.242A1.001 1.001 0 0 0 15 2H8c-.459 0-.858.313-.97.758L6.22 6H6a1 1 0 0 0-1 1zm11 1v8H7V8h9z" key="k0" />
]


const WatchAlt = ({ title, ...restProps }) => {
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
          ? [<title key="WatchAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WatchAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WatchAlt.displayName = 'WatchAlt'

WatchAlt.defaultProps = { height: 24, width: 24}

export default WatchAlt
