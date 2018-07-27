import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 22h14a1 1 0 0 0 1-1V9c0-.021-.011-.041-.013-.062a.952.952 0 0 0-.051-.259c-.011-.032-.02-.063-.033-.093a.984.984 0 0 0-.196-.293l-6-6a1.002 1.002 0 0 0-.292-.195c-.031-.015-.063-.023-.097-.034a.946.946 0 0 0-.253-.05C13.043 2.012 13.022 2 13 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zm9-16.586L16.586 8H14V5.414zM6 4h6v5a1 1 0 0 0 1 1h5v10H6V4z" key="k0" />
,
<path d="M11 16l-1-1-2 3h8l-3-6z" key="k1" />
,
<circle cx={9} cy={13} r={1} key="k2" />
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
