import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 8h-6.612l1.561-4.684a.996.996 0 0 0-.137-.901A1.003 1.003 0 0 0 15 2h-3c-.297 0-.578.132-.769.36L6.531 8H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15c.417 0 .79-.259.937-.649l3-8A1 1 0 0 0 22 12V9a1 1 0 0 0-1-1zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.469 4h1.144l-1.561 4.684A1 1 0 0 0 13 10h7v1.819z" key="k0" />
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
