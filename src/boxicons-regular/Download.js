import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 4v8H8l4 4 4-4h-3V4z" key="k0" />
,
<path d="M20 18H4v-8H2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9h-2v8z" key="k1" />
]


const Download = ({ title, ...restProps }) => {
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
          ? [<title key="Download-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Download',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Download.displayName = 'Download'

Download.defaultProps = { height: 24, width: 24}

export default Download
