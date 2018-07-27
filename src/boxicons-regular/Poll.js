import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M6 11h16v2H6zm0-4h11.97v2H6zm0 8h9v2H6zM2 4h2v16H2z" key="k0" />
]


const Poll = ({ title, ...restProps }) => {
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
          ? [<title key="Poll-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Poll',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Poll.displayName = 'Poll'

Poll.defaultProps = { height: 24, width: 24}

export default Poll
