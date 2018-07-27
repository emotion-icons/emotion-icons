import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 3H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM4 5h16v2H4V5zm15 14H5V9h14v10z" key="k0" />
,
<path d="M8 11h8v2H8z" key="k1" />
]


const Box = ({ title, ...restProps }) => {
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
          ? [<title key="Box-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Box',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Box.displayName = 'Box'

Box.defaultProps = { height: 24, width: 24}

export default Box
