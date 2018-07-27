import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 5h18v2H3zm0 4h18v2H3zm0 4h9v2H3zm0 4h9v2H3zm17.294-3.708l-4.3 4.291-1.292-1.292-1.414 1.415 1.999 1.998a.997.997 0 0 0 1.413.001l5.006-4.997-1.412-1.416z" key="k0" />
]


const ListCheck = ({ title, ...restProps }) => {
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
          ? [<title key="ListCheck-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ListCheck',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ListCheck.displayName = 'ListCheck'

ListCheck.defaultProps = { height: 24, width: 24}

export default ListCheck
