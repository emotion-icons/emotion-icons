import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M12 0a2.4 2.4 0 0 0-2.4 2.4v8.4c0 1.324 1.074 2.398 2.4 2.398s2.4-1.074 2.4-2.398V5.21a7.204 7.204 0 0 1 4.799 6.789 7.2 7.2 0 1 1-12.29-5.09 2.4 2.4 0 1 0-3.396-3.396A11.978 11.978 0 0 0 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12S18.627 0 12 0" key="k0" />
]

export const hex='#1E8CBE'
const Gravatar = ({ title, ...restProps }) => {
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
          ? [<title key="Gravatar-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Gravatar',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Gravatar.displayName = 'Gravatar'

Gravatar.defaultProps = { height: 24, width: 24}

export default Gravatar
