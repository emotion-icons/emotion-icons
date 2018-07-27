import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 10h-1c0-4.411-3.589-8-8-8s-8 3.589-8 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7c0-3.309 2.691-6 6-6s6 2.691 6 6v10h-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1z" key="k0" />
]


const Support = ({ title, ...restProps }) => {
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
          ? [<title key="Support-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Support',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Support.displayName = 'Support'

Support.defaultProps = { height: 24, width: 24}

export default Support
