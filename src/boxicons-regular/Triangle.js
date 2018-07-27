import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.856 20.516a.996.996 0 0 0 .027-.983l-9-17c-.346-.655-1.422-.655-1.768 0l-9 17A.999.999 0 0 0 3 21h18a.998.998 0 0 0 .856-.484zM4.661 19L12 5.137 19.339 19H4.661z" key="k0" />
]


const Triangle = ({ title, ...restProps }) => {
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
          ? [<title key="Triangle-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Triangle',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Triangle.displayName = 'Triangle'

Triangle.defaultProps = { height: 24, width: 24}

export default Triangle
