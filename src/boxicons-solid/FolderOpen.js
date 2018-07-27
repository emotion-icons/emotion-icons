import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.835 11.449A1.003 1.003 0 0 0 21 11H6c-.4 0-.762.238-.919.606l-3 7A.998.998 0 0 0 3 20h15c.4 0 .762-.238.919-.606l3-7a1 1 0 0 0-.084-.945z" key="k0" />
,
<path d="M4.086 9.594A.999.999 0 0 1 5 9h15V7a1 1 0 0 0-1-1h-7.738L7.935 4.129A.995.995 0 0 0 7.444 4H3a1 1 0 0 0-1 1v9.287l2.086-4.693z" key="k1" />
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
