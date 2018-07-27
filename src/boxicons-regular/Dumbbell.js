import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M17 5h-1a1 1 0 0 0-1 1v5H9V6a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-5h6v5a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 11H2v2h1v3h2V8H3zm19 0h-1V8h-2v8h2v-3h1z" key="k0" />
]


const Dumbbell = ({ title, ...restProps }) => {
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
          ? [<title key="Dumbbell-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Dumbbell',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Dumbbell.displayName = 'Dumbbell'

Dumbbell.defaultProps = { height: 24, width: 24}

export default Dumbbell
