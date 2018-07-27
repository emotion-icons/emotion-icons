import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 3v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9c0-.021-.011-.041-.013-.062a.952.952 0 0 0-.051-.259c-.011-.032-.02-.063-.033-.093a.984.984 0 0 0-.196-.293l-6-6a1.002 1.002 0 0 0-.292-.195c-.031-.015-.063-.023-.097-.034a.946.946 0 0 0-.253-.05C13.043 2.012 13.022 2 13 2H5a1 1 0 0 0-1 1zm12.586 5H14V5.414L16.586 8zM6 4h6v5a1 1 0 0 0 1 1h5v10H6V4z" key="k0" />
,
<path d="M8 12h8v2H8zm0-4h2v2H8zm0 8h8v2H8z" key="k1" />
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
