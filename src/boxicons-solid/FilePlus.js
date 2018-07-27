import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="none" d="M13 12h-2v3H8v2h3v3h2v-3h3v-2h-3zm-1-3a1 1 0 0 0 1 1h5l-6-6v5z" key="k0" />
,
<path d="M13.707 2.293A.996.996 0 0 0 13 2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a.996.996 0 0 0-.293-.707l-6-6zM16 17h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7a1 1 0 0 1-1-1V4l6 6h-5z" key="k1" />
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
