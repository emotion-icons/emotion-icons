import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z" key="k0" />
]


const FileUpload = ({ title, ...restProps }) => {
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
          ? [<title key="FileUpload-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FileUpload',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FileUpload.displayName = 'FileUpload'

FileUpload.defaultProps = { height: 24, width: 24}

export default FileUpload
