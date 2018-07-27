import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 16h2V7h3l-4-4-4 4h3z" key="k0" />
,
<path d="M21 9h-6v2h5v7H4v-7h5V9H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1z" key="k1" />
]


const Export = ({ title, ...restProps }) => {
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
          ? [<title key="Export-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Export',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Export.displayName = 'Export'

Export.defaultProps = { height: 24, width: 24}

export default Export
