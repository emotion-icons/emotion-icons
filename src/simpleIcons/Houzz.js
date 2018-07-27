import React from 'react'
import styled from 'react-emotion'

export const innerElements = [<path d="M18.93 12v8L12 24v-8.002L5.07 20V3.998L12 0v8l-6.928 4L12 15.998V8l6.93-4.002V12z" key="k0" />
]

export const hex='#7AC142'
const Houzz = ({ title, ...restProps }) => {
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
          ? [<title key="Houzz-title">{title}</title>, ...innerElements]
          : innerElements
      ),
      viewBox: '0 0 24 24',
       'aria-hidden': title ? null : 'true',
       'aria-labelledby': title && 'icon-title-Houzz',
      focusable: 'false',
      role: title ? undefined:'img' ,
        "fill": "currentColor",
      ...restProps
    }
    )
  }

Houzz.displayName = 'Houzz'

Houzz.defaultProps = { height: 24, width: 24}

export default Houzz
