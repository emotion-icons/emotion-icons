import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 22h12v-2H5V8H3v13a1 1 0 0 0 1 1z" key="k0" />
,
<path d="M14.707 2.293A.996.996 0 0 0 14 2H8a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8a.997.997 0 0 0-.293-.707l-5-5zM14 9a1 1 0 0 1-1-1V4l5 5h-4z" key="k1" />
]


const Files = ({ title, ...restProps }) => {
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
          ? [<title key="Files-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Files',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Files.displayName = 'Files'

Files.defaultProps = { height: 24, width: 24}

export default Files
