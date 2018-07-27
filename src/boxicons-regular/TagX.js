import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12.707 15.707L15 13.414l2.293 2.293 1.414-1.414L16.414 12l2.293-2.293-1.414-1.414L15 10.586l-2.293-2.293-1.414 1.414L13.586 12l-2.293 2.293z" key="k0" />
,
<path d="M7.231 18.641c.191.227.472.359.769.359h13a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H8c-.297 0-.578.132-.769.359l-5 6c-.309.371-.309.91 0 1.281l5 6.001zM8.469 7H20v10H8.469l-4.167-5 4.167-5z" key="k1" />
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
