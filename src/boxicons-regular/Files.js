import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V8h-.009a.996.996 0 0 0-.284-.707l-5-5A.99.99 0 0 0 14 2.01V2H8zm7 3.414L16.586 7H15V5.414zM18 9v7H9V4h4v4a1 1 0 0 0 1 1h4z" key="k0" />
,
<path d="M3 8v13a1 1 0 0 0 1 1h12v-2H5V8H3z" key="k1" />
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
