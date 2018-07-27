import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2h3a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-3V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12zm16-9v5h-2v-5h2zM5 9h10v10H5V9zm0-7h2v3H5zm4 0h2v3H9zm4 0h2v3h-2z" key="k0" />
]


const Coffee = ({ title, ...restProps }) => {
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
          ? [<title key="Coffee-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Coffee',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Coffee.displayName = 'Coffee'

Coffee.defaultProps = { height: 24, width: 24}

export default Coffee
