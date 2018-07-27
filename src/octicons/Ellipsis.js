import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fillRule="evenodd" d="M11 5H1c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h10c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM4 9H2V7h2v2zm3 0H5V7h2v2zm3 0H8V7h2v2z" key="k0" />
]


const Ellipsis = ({ title, ...restProps }) => {
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
          ? [<title key="Ellipsis-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 12 16',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Ellipsis',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Ellipsis.displayName = 'Ellipsis'

Ellipsis.defaultProps = { height: 16, width: 12}

export default Ellipsis
