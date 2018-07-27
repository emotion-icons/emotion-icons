import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.707 2.293a.999.999 0 0 0-1.414 0l-8 8a1.003 1.003 0 0 0-.263.464l-1 4a1 1 0 0 0 1.212 1.213l4-1c.176-.044.337-.135.465-.263l8-8a.999.999 0 0 0 0-1.414l-3-3zm-6.219 10.804l-2.114.528.529-2.114L18 4.414 19.586 6l-7.098 7.097z" key="k0" />
,
<path d="M5 20h14a1 1 0 0 0 1-1v-6h-2v5H6V6h5V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1z" key="k1" />
]


const Edit = ({ title, ...restProps }) => {
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
          ? [<title key="Edit-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Edit',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Edit.displayName = 'Edit'

Edit.defaultProps = { height: 24, width: 24}

export default Edit
