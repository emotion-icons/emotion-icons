import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M11 9v3H8v2h3v3h2v-3h3v-2h-3V9z" key="k0" />
,
<path d="M21 5h-8.764L8.447 3.105A1.002 1.002 0 0 0 8 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-1 14H4V5h3.764l3.789 1.895c.138.069.292.105.447.105h8v12z" key="k1" />
]


const FolderPlus = ({ title, ...restProps }) => {
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
          ? [<title key="FolderPlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FolderPlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FolderPlus.displayName = 'FolderPlus'

FolderPlus.defaultProps = { height: 24, width: 24}

export default FolderPlus
