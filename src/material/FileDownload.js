import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" key="k0" />
]


const FileDownload = ({ title, ...restProps }) => {
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
          ? [<title key="FileDownload-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FileDownload',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FileDownload.displayName = 'FileDownload'

FileDownload.defaultProps = { height: 24, width: 24}

export default FileDownload
