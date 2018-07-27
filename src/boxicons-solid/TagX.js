import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 5H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6c.191.228.472.36.769.36h13a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm-2.293 9.293l-1.414 1.414L15 13.414l-2.293 2.293-1.414-1.414L13.586 12l-2.293-2.293 1.414-1.414L15 10.586l2.293-2.293 1.414 1.414L16.414 12l2.293 2.293z" key="k0" />
]


const TagX = ({ title, ...restProps }) => {
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
          ? [<title key="TagX-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-TagX',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

TagX.displayName = 'TagX'

TagX.defaultProps = { height: 24, width: 24}

export default TagX
