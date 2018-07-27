import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M6 3.5c3.92.44 8 3.125 8 10-2.312-5.062-4.75-6-8-6V11L.5 5.5 6 0v3.5z" key="k0" />
]


const Reply = ({ title, ...restProps }) => {
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
          ? [<title key="Reply-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 14 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Reply',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Reply.displayName = 'Reply'

Reply.defaultProps = { height: 16, width: 14}

export default Reply
