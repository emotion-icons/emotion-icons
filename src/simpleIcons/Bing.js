import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3.605 0L8.4 1.686V18.56l6.753-3.895-3.31-1.555-2.09-5.2 10.64 3.738v5.435L8.403 24l-4.797-2.67V0z" key="k0" />
]

export const hex='#008373'
const Bing = ({ title, ...restProps }) => {
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
          ? [<title key="Bing-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Bing',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Bing.displayName = 'Bing'

Bing.defaultProps = { height: 24, width: 24}

export default Bing
