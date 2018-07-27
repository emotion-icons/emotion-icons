import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M460 120H52c-2.2 0-4-1.8-4-4V96c0-17.7 14.3-32 32-32h352c17.7 0 32 14.3 32 32v20c0 2.2-1.8 4-4 4zm-20 26H72c-4.4 0-8 3.6-8 8v262c0 17.6 14.4 32 32 32h320c17.6 0 32-14.4 32-32V154c0-4.4-3.6-8-8-8zM306 288h-99.6c-7.1 0-13.4-5.2-14.3-12.3-1-8.5 5.6-15.7 13.9-15.7h99.6c7.1 0 13.4 5.2 14.3 12.3 1 8.4-5.6 15.7-13.9 15.7z" key="k0" />
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
      viewBox: '0 0 512 512',
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

Archive.defaultProps = { height: undefined, width: undefined}

export default Archive
