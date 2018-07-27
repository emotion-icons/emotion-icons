import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 22h14a1 1 0 0 0 1-1V9a.997.997 0 0 0-.293-.707l-6-6A.996.996 0 0 0 13 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zm7-18l6 6h-5a1 1 0 0 1-1-1V4zm-3 8a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm1 3l1 1 2-4 3 6H8l2-3z" key="k0" />
]


const FileImage = ({ title, ...restProps }) => {
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
          ? [<title key="FileImage-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FileImage',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FileImage.displayName = 'FileImage'

FileImage.defaultProps = { height: 24, width: 24}

export default FileImage
