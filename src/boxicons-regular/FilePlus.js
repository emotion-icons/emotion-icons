import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M5 22h6v-2H6V4h6v5a1 1 0 0 0 1 1h5v3h2V9c0-.021-.011-.041-.013-.062a.952.952 0 0 0-.051-.259c-.011-.032-.02-.063-.033-.093a.984.984 0 0 0-.196-.293l-6-6a.983.983 0 0 0-.292-.195c-.032-.015-.063-.023-.097-.034a.988.988 0 0 0-.252-.05C13.043 2.012 13.022 2 13 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1zm9-16.586L16.586 8H14V5.414z" key="k0" />
,
<path d="M15 22h2v-3h3v-2h-3v-3h-2v3h-3v2h3z" key="k1" />
]


const FilePlus = ({ title, ...restProps }) => {
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
          ? [<title key="FilePlus-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-FilePlus',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

FilePlus.displayName = 'FilePlus'

FilePlus.defaultProps = { height: 24, width: 24}

export default FilePlus
