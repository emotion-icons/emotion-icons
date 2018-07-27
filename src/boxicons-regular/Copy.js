import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M15 8H3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1zm-1 12H4V10h10v10z" key="k0" />
,
<path d="M21 2H9a1 1 0 0 0-1 1v3h2V4h10v10h-2v2h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" key="k1" />
]


const Copy = ({ title, ...restProps }) => {
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
          ? [<title key="Copy-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Copy',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Copy.displayName = 'Copy'

Copy.defaultProps = { height: 24, width: 24}

export default Copy
