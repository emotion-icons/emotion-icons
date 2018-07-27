import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 16h8a1 1 0 0 0 1-1v-3h-2v2H9v-2H7v3a1 1 0 0 0 1 1z" key="k0" />
,
<path d="M21.858 8.487l-2.991-5.001A1.001 1.001 0 0 0 18.009 3h-12c-.351 0-.676.184-.857.484l-3.009 5 .015.009A.967.967 0 0 0 2 9v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9a.963.963 0 0 0-.156-.504l.014-.009zM6.574 5h10.867l1.794 3H4.769l1.805-3zM20 18H4v-8h16v8z" key="k1" />
]


const Archive = ({ title, ...restProps }) => {
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
          ? [<title key="Archive-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Archive',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Archive.displayName = 'Archive'

Archive.defaultProps = { height: 24, width: 24}

export default Archive
