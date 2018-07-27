import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M48 270.9l118.9 44.6L181.7 464 256 360l104 104L464 48 48 270.9zm294.9 126L260 313.4 374.9 152 193.6 289.8 124.9 265l291-156.2-73 288.1z" key="k0" />
]


const PaperPlane = ({ title, ...restProps }) => {
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
          ? [<title key="PaperPlane-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 512 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-PaperPlane',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

PaperPlane.displayName = 'PaperPlane'

PaperPlane.defaultProps = { height: undefined, width: undefined}

export default PaperPlane
