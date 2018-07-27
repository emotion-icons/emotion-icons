import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21 4H3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h4.52l3.699 4.625a1 1 0 0 0 1.562 0L16.48 17H21a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z" key="k0" />
]


const MessageAlt = ({ title, ...restProps }) => {
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
          ? [<title key="MessageAlt-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-MessageAlt',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

MessageAlt.displayName = 'MessageAlt'

MessageAlt.defaultProps = { height: 24, width: 24}

export default MessageAlt
