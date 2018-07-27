import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 21h2V8H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1zM21 8h-6.612l1.561-4.684a.996.996 0 0 0-.137-.901A1.003 1.003 0 0 0 15 2h-3c-.297 0-.578.132-.769.36L7 7.438V21h11c.417 0 .79-.259.937-.649l3-8A1 1 0 0 0 22 12V9a1 1 0 0 0-1-1z" key="k0" />
]


const Like = ({ title, ...restProps }) => {
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
          ? [<title key="Like-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Like',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Like.displayName = 'Like'

Like.defaultProps = { height: 24, width: 24}

export default Like
