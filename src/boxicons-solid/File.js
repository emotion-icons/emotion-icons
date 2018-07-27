import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 22a1 1 0 0 0 1-1V9a.997.997 0 0 0-.293-.707l-6-6A.996.996 0 0 0 13 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14zM12 4l6 6h-5a1 1 0 0 1-1-1V4zM8 8h2v2H8V8zm0 4h8v2H8v-2zm0 4h8v2H8v-2z" key="k0" />
]


const File = ({ title, ...restProps }) => {
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
          ? [<title key="File-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-File',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

File.displayName = 'File'

File.defaultProps = { height: 24, width: 24}

export default File
