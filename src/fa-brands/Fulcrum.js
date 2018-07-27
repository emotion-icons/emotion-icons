import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path fill="currentColor" d="M70.75 164.14l-35.38 43.55L0 164.14l35.38-43.55 35.37 43.55zM119.23 0L98.69 198.18 47.72 256l50.98 57.82L119.23 512V300.89L78.15 256l41.08-44.89V0zm79.67 164.14l35.38 43.55 35.38-43.55-35.38-43.55-35.38 43.55zm-48.48 46.97L191.5 256l-41.08 44.89V512l20.54-198.18L221.94 256l-50.98-57.82L150.42 0v211.11z" key="k0" />
]


const Fulcrum = ({ title, ...restProps }) => {
  return React.createElement(
    styled('svg',{shouldForwardProp: name => !['width', 'size', 'height'].includes(name)})(
      {
        display: 'inline-block',
        verticalAlign: '-.125em',
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
          ? [<title key="Fulcrum-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 269 512',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Fulcrum',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Fulcrum.displayName = 'Fulcrum'

Fulcrum.defaultProps = { height: undefined, width: undefined}

export default Fulcrum
