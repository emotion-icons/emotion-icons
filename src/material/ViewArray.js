import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z" key="k0" />
]


const ViewArray = ({ title, ...restProps }) => {
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
          ? [<title key="ViewArray-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-ViewArray',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

ViewArray.displayName = 'ViewArray'

ViewArray.defaultProps = { height: 24, width: 24}

export default ViewArray
