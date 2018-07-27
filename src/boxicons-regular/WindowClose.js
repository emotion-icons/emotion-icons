import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zm-1 14H4V8h16v10z" key="k0" />
,
<path d="M9.707 16.707L12 14.414l2.293 2.293 1.414-1.414L13.414 13l2.293-2.293-1.414-1.414L12 11.586 9.707 9.293l-1.414 1.414L10.586 13l-2.293 2.293z" key="k1" />
]


const WindowClose = ({ title, ...restProps }) => {
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
          ? [<title key="WindowClose-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-WindowClose',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

WindowClose.displayName = 'WindowClose'

WindowClose.defaultProps = { height: 24, width: 24}

export default WindowClose
