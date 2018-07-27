import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M8 10l4 4v-3h3c2.439 0 3 .561 3 3v4h2v-4c0-3.552-1.448-5-5-5h-3V6l-4 4zm0 4v-2l-2-2 2-2V6l-4 4z" key="k0" />
]


const ReplyAll = ({ title, ...restProps }) => {
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
          ? [<title key="ReplyAll-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ReplyAll',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ReplyAll.displayName = 'ReplyAll'

ReplyAll.defaultProps = { height: 24, width: 24}

export default ReplyAll
