import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 2.007a9.928 9.928 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143A9.93 9.93 0 0 0 12 21.995a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143A9.928 9.928 0 0 0 12 2.007zM15 15H9.336l2.125-2.125-3.168-3.168 1.414-1.414 3.168 3.168L15 9.337V15z" key="k0" />
]


const RightDownArrowCircle = ({ title, ...restProps }) => {
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
          ? [<title key="RightDownArrowCircle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-RightDownArrowCircle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

RightDownArrowCircle.displayName = 'RightDownArrowCircle'

RightDownArrowCircle.defaultProps = { height: 24, width: 24}

export default RightDownArrowCircle
