import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.293 5.707c2.733 2.733 2.733 7.353 0 10.086l1.414 1.414c3.5-3.5 3.5-9.414 0-12.914l-1.414 1.414zm-1.586 8.5c.944-.943 1.465-2.172 1.465-3.457s-.521-2.514-1.465-3.457l-1.414 1.414c.566.566.879 1.292.879 2.043s-.313 1.477-.879 2.043l1.414 1.414zm-10.5-8.5L4.793 4.293c-3.5 3.5-3.5 9.414 0 12.914l1.414-1.414c-2.733-2.733-2.733-7.353 0-10.086z" key="k0" />
,
<path d="M7.293 7.293c-.944.943-1.465 2.172-1.465 3.457s.521 2.514 1.465 3.457l1.414-1.414c-.566-.566-.879-1.292-.879-2.043s.313-1.477.879-2.043L7.293 7.293zM13 21v-8.777a1.99 1.99 0 0 0 1-1.723 2 2 0 0 0-4 0 1.988 1.988 0 0 0 1 1.723V21h2z" key="k1" />
]


const Broadcast = ({ title, ...restProps }) => {
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
          ? [<title key="Broadcast-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Broadcast',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Broadcast.displayName = 'Broadcast'

Broadcast.defaultProps = { height: 24, width: 24}

export default Broadcast
