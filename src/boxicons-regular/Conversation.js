import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M3 4v12a1.001 1.001 0 0 0 1.625.781L9.351 13H16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1zm2 1h10v6H9a1 1 0 0 0-.625.219L5 13.919V5z" key="k0" />
,
<path d="M19.375 20.781a.998.998 0 0 0 1.059.12c.345-.167.566-.516.566-.901V8h-2v9.919l-3.375-2.7A1 1 0 0 0 15 15h-5v2h4.649l4.726 3.781z" key="k1" />
]


const Conversation = ({ title, ...restProps }) => {
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
          ? [<title key="Conversation-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Conversation',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Conversation.displayName = 'Conversation'

Conversation.defaultProps = { height: 24, width: 24}

export default Conversation
