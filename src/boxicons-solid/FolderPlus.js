import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5h-8.764L8.447 3.105A1.002 1.002 0 0 0 8 3H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-5 9h-3v3h-2v-3H8v-2h3V9h2v3h3v2z" key="k0" />
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
