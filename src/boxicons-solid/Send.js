import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M21.426 11.095l-17-8A1 1 0 0 0 3.03 4.242l1.47 5.883L12 12l-7.5 1.875-1.47 5.883a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z" key="k0" />
]


const Send = ({ title, ...restProps }) => {
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
          ? [<title key="Send-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Send',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Send.displayName = 'Send'

Send.defaultProps = { height: 24, width: 24}

export default Send
