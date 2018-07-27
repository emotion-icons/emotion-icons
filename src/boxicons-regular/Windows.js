import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H7v2h13v11h2V4a1 1 0 0 0-1-1z" key="k0" />
,
<path d="M3 21h14a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zm1-10h12v8H4v-8z" key="k1" />
]


const Windows = ({ title, ...restProps }) => {
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
          ? [<title key="Windows-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Windows',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Windows.displayName = 'Windows'

Windows.defaultProps = { height: 24, width: 24}

export default Windows
