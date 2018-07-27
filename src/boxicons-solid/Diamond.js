import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M14.719 10H9.281L12 22zm-.107-2l-2-6h-1.224l-2 6zM2.5 10l7.494 10L7.22 10zm14.221-2h4.748l-4.7-5.641A1.005 1.005 0 0 0 16 2h-1.28l2.001 6zM7.279 8L9.28 2H8c-.297 0-.578.132-.769.359L2.531 8h4.748zm9.501 2l-2.786 10L21.5 10z" key="k0" />
]


const Diamond = ({ title, ...restProps }) => {
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
          ? [<title key="Diamond-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Diamond',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Diamond.displayName = 'Diamond'

Diamond.defaultProps = { height: 24, width: 24}

export default Diamond
