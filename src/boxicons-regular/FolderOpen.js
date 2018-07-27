import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.835 11.449A1.003 1.003 0 0 0 21 11h-1V7a1 1 0 0 0-1-1h-7.738L7.935 4.129A.995.995 0 0 0 7.444 4H3a1 1 0 0 0-1 1v14h.007a1 1 0 0 0 .158.551c.186.28.499.449.835.449h15c.4 0 .762-.238.919-.606l3-7a1 1 0 0 0-.084-.945zM7.183 6l3.327 1.871A.988.988 0 0 0 11 8h7v3H6c-.4 0-.762.238-.919.606L4 14.129V6h3.183zm10.158 12H4.517l2.143-5h12.824l-2.143 5z" key="k0" />
]


const FolderOpen = ({ title, ...restProps }) => {
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
          ? [<title key="FolderOpen-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FolderOpen',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FolderOpen.displayName = 'FolderOpen'

FolderOpen.defaultProps = { height: 24, width: 24}

export default FolderOpen
