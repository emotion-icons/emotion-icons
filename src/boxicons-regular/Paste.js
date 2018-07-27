import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 11h-1V5a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h6v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zM10 4h4v2h-4V4zm1 8v6H6V6h2v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h2v5h-6a1 1 0 0 0-1 1zm9 8h-7v-7h7v7z" key="k0" />
]


const Paste = ({ title, ...restProps }) => {
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
          ? [<title key="Paste-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Paste',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Paste.displayName = 'Paste'

Paste.defaultProps = { height: 24, width: 24}

export default Paste
