import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M7.707 17.707L13.414 12 7.707 6.293 6.293 7.707 10.586 12l-4.293 4.293zM15 6h2v12h-2z" key="k0" />
]


const LastPage = ({ title, ...restProps }) => {
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
          ? [<title key="LastPage-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-LastPage',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

LastPage.displayName = 'LastPage'

LastPage.defaultProps = { height: 24, width: 24}

export default LastPage
